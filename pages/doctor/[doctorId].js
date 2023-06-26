import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import getData from "@/lib/firebase/firestore/getData";
import styles from "@/styles/doctor.module.css"; // Import the doctor.module.css file

const Doctor = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);

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
  }, [router.query.doctorId]);

  if (!userData) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
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
  );
};

export default Doctor;
