import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";
import getData from "@/lib/firebase/firestore/getData";
import styles from "@/styles/doctor.module.css";
import CustomButton from "@/components/Button/CustomButton";

const Doctor = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [patients, setPatients] = useState([]);

  const fetchPatientsData = useCallback(async () => {
    try {
      const response = await fetch(
        `/api/patients?doctorId=${router.query.doctorId}`
      );
      const data = await response.json();

      if (response.ok) {
        setPatients(data.patients);
        console.log(data.patients);
        console.log("Patient records fetched successfully");
      } else {
        console.log(data.error);
        console.log("An error occurred while fetching patient records");
      }
    } catch (error) {
      console.log(error);
      console.log("An error occurred while fetching patient records");
    }
  }, [router.query.doctorId]);

  useEffect(() => {
    const fetchUserData = async () => {
      const { result, error } = await getData("users", router.query.doctorId);
      if (result) {
        setUserData(result.data());
      } else {
        console.log(error);
      }
    };

    fetchUserData();
    fetchPatientsData();
  }, [fetchPatientsData, router.query.doctorId]);

  const handleDeletePatient = async (patientId) => {
    try {
      const response = await fetch(
        `/api/deletePatient/${patientId}?doctorId=${router.query.doctorId}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();

      if (response.ok) {
        console.log(data.message);
        fetchPatientsData();
        // setPatients((prevPatients) =>
        //   prevPatients.filter((patient) => patient.id !== patientId)
        // );
      } else {
        console.log(data.error);
        console.log("Failed to delete patient record");
      }
    } catch (error) {
      console.log(error);
      console.log("An error occurred while deleting patient record");
    }
  };

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
            <span className={styles.label}>Full Name:</span>
            <span
              className={styles.value}
            >{`${userData.firstName} ${userData.lastName}`}</span>
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
            <span className={styles.value}>
              {" "}
              {`${userData.aadhaarCard.substr(0, 8)}${"*".repeat(4)}`}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.patientRecords}>
        <h2 className={styles.patientHeading}>Patient Records</h2>
        <table className={styles.patientTable}>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Contact Number</th>
              <th>City</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{`${patient.firstName} ${patient.lastName}`}</td>
                <td>{patient.contactNumber}</td>
                <td>{patient.city}</td>
                <td>
                  <button
                    className={`${styles.btn} ${styles.primary}`}
                    onClick={() => handleDeletePatient(patient.id)}
                  >
                    Completed
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Doctor;
