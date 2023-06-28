import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import getData from "@/lib/firebase/firestore/getData";
import styles from "@/styles/doctor.module.css"; // Import the doctor.module.css file
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  query,
  where,
} from "firebase/firestore";
import { firebase_app } from "@/firebaseConfig";

const Doctor = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [patients, setPatients] = useState([]);
  const [doctorsData, setDoctorsData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const { result, error } = await getData("users", router.query.doctorId);
      if (result) {
        setUserData(result.data());
      } else {
        console.log(error);
      }
    };

    const fetchPatientsData = async () => {
      try {
        const db = getFirestore(firebase_app);
        const doctorId = router.query.doctorId;

        // Get the doctor document based on the name field containing the patient subcollection ID
        const doctorsCollectionRef = collection(db, "doctors");
        const querySnapshot = await getDocs(
          query(doctorsCollectionRef, where("name", "==", doctorId))
        );

        if (querySnapshot.docs.length === 0) {
          console.log("Doctor not found");
          return;
        }

        const doctorDocRef = querySnapshot.docs[0].ref;

        // Get the "patients" subcollection of the doctor
        const patientsRef = collection(doctorDocRef, "patients");

        // Get all the patient documents
        const patientsSnapshot = await getDocs(patientsRef);

        // Map the patient documents to obtain the patient data
        const patientsData = patientsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPatients(patientsData);
        console.log({ patientsData });
        console.log("Patient records fetched successfully");
      } catch (error) {
        console.log(error);
        console.log("An error occurred while fetching patient records");
      }
    };

    fetchUserData();
    fetchPatientsData();
  }, [router.query.doctorId]);

  if (!userData) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.doctorRecords}>
          <h1 className={styles.heading}>
            {/* Doctor Dynamic Page {router.query.doctorId} */}
          </h1>
          <div className={styles.info}>
            <span className={styles.label}>First Name:</span>
            <span className={styles.value}>{userData.firstName}</span>
          </div>
          <div className={styles.info}>
            <span className={styles.label}>Last Name:</span>
            <span className={styles.value}>{userData.lastName}</span>
          </div>
          <div className={styles.info}>
            <span className={styles.label}>Email:</span>
            <span className={styles.value}>{userData.email}</span>
          </div>
          <div className={styles.info}>
            <span className={styles.label}>Phone Number:</span>
            <span className={styles.value}>{userData.phoneNumber}</span>
          </div>
          <div className={styles.info}>
            <span className={styles.label}>Aadhaar Card:</span>
            <span className={styles.value}>{userData.aadhaarCard}</span>
          </div>
        </div>
      </div>
      <div className={styles.patientRecords}>
        <h2 className={styles.patientHeading}>Patient Records</h2>
        <table className={styles.patientTable}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Contact Number</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.firstName}</td>
                <td>{patient.lastName}</td>
                <td>{patient.contactNumber}</td>
                <td>{patient.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Doctor;
