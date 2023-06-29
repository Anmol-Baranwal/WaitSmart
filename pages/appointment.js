import React, { useState, useEffect } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Divider,
} from "@chakra-ui/react";
import styles from "@/styles/appointment.module.css";
import CustomButton from "@/components/Button/CustomButton";
import Image from "next/image";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { firebase_app } from "@/firebaseConfig";
import { useRouter } from "next/router";

const db = getFirestore(firebase_app);

const Appointment = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [city, setCity] = useState("");
  const [doctors, setDoctors] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const usersCollectionRef = collection(db, "users");
        const usersSnapshot = await getDocs(usersCollectionRef);
        const doctorDataArray = usersSnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().firstName + " " + doc.data().lastName,
        }));
        setDoctors(doctorDataArray);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDoctors();
  }, []);

  const handleSubmit = async (e) => {
    // if (e) e.preventDefault();

    try {
      const response = await fetch("/api/createDoctorAppointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          contactNumber,
          selectedDoctor,
          city,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const { doctorId, patientId } = data;

        console.log(
          "Appointment created successfully with doctor ID:",
          doctorId
        );
        console.log("Patient data added successfully with ID:", patientId);

        router.push("/appointment");
      } else {
        console.log("Failed to create appointment");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.section}>
      <Box className={styles.container}>
        <Box className={styles.upperPart}>
          <Image
            src="/static/icons/org.png"
            alt=""
            className={styles.logo}
            width="30"
            height="30"
          />
        </Box>
        <Divider orientation="horizontal" className={styles.divider} />
        <form onSubmit={handleSubmit}>
          <FormControl className={styles.formControl} id="firstName">
            <FormLabel className={styles.label}>First Name</FormLabel>
            <Input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={styles.input}
              placeholder="Enter your first name"
              pattern="[A-Za-z]+"
              title="Please enter alphabets only"
              required
            />
          </FormControl>

          <FormControl className={styles.formControl} id="lastName">
            <FormLabel className={styles.label}>Last Name</FormLabel>
            <Input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={styles.input}
              placeholder="Enter your last name"
              pattern="[A-Za-z]+"
              title="Please enter alphabets only"
              required
            />
          </FormControl>

          <FormControl className={styles.formControl} id="contactNumber">
            <FormLabel className={styles.label}>Contact Number</FormLabel>
            <Input
              type="tel"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className={styles.input}
              placeholder="Enter your phone number (10 digits)"
              pattern="[0-9]{10}"
              title="Please enter digits only without country code"
              maxLength={10}
              required
            />
          </FormControl>

          <FormControl className={styles.formControl} id="doctor">
            <FormLabel className={styles.label}>Doctor</FormLabel>
            <Select
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              className={styles.select}
              placeholder="Choose your doctor"
              required
            >
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl className={styles.formControl} id="city">
            <FormLabel className={styles.label}>City</FormLabel>
            <Input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className={styles.input}
              placeholder="Enter your city"
              title="Please enter alphabets only"
              required
            />
          </FormControl>

          <button
            type="submit"
            // className={styles.btn}
            className={`${styles.btn} ${styles.primary}`}
            // onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </Box>
    </section>
  );
};

export default Appointment;
