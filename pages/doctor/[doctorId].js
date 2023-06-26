import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import getData from "@/lib/firebase/firestore/getData"; // Import the getData function

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
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* <p>Doctor Dynamic page {router.query.doctorId}</p> */}
      <p>First Name: {userData.firstName}</p>
      <p>Last Name: {userData.lastName}</p>
      <p>Email: {userData.email}</p>
      <p>Phone Number: {userData.phoneNumber}</p>
      <p>Aadhaar Card: {userData.aadhaarCard}</p>
    </div>
  );
};

export default Doctor;
