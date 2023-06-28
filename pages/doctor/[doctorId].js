import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import getData from "@/lib/firebase/firestore/getData";
import styles from "@/styles/doctor.module.css"; // Import the doctor.module.css file

const Doctor = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [patients, setPatients] = useState([]);

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
      // console.log(router.query.doctorId);
      try {
        const response = await fetch(
          `/api/patients?doctorId=${router.query.doctorId}`
        );
        if (response.ok) {
          const { patients } = await response.json();
          console.log({ patients });
          setPatients(patients);
          console.log("Patient records fetched successfully");
        } else {
          console.log("Failed to fetch patient records");
        }
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
      <div className={styles.patientRecords}>
        <h2 className={styles.patientHeading}>Patient Records</h2>
        {patients.map((patient) => (
          <div key={patient.id} className={styles.patientInfo}>
            <span className={styles.patientLabel}>First Name:</span>
            <span className={styles.patientValue}>{patient.firstName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctor;
