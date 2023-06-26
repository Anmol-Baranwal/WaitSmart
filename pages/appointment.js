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
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { firebase_app } from "@/firebaseConfig";

const db = getFirestore(firebase_app);

const Appointment = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [city, setCity] = useState("");
  const [doctors, setDoctors] = useState([]); // State for storing the fetched doctors

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const usersCollectionRef = collection(db, "users");
        const usersSnapshot = await getDocs(usersCollectionRef);
        const doctorsData = usersSnapshot.docs.map((doc) => doc.data());
        const doctorNames = doctorsData.map((doctor) => doctor.name);
        setDoctors(doctorNames);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDoctors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const doctorsCollectionRef = collection(db, "doctors");

      // Create a new doctor document in the "doctors" collection
      const newDoctorDoc = await addDoc(doctorsCollectionRef, {
        name: selectedDoctor,
      });
      const doctorId = newDoctorDoc.id;

      const patientData = {
        firstName,
        lastName,
        contactNumber,
        city,
      };

      // Create a new patient document within the "patients" subcollection of the selected doctor
      const patientsCollectionRef = collection(
        doctorsCollectionRef,
        doctorId,
        "patients"
      );
      const newPatientDoc = await addDoc(patientsCollectionRef, patientData);
      const patientId = newPatientDoc.id;

      console.log("Appointment created successfully with doctor ID:", doctorId);
      console.log("Patient data added successfully with ID:", patientId);
    } catch (error) {
      console.log(error);
      // Handle error from the API request
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
            />
          </FormControl>

          <FormControl className={styles.formControl} id="doctor">
            <FormLabel className={styles.label}>Doctor</FormLabel>
            <Select
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              className={styles.select}
              placeholder="Choose your doctor"
            >
              {doctors.map((doctor) => (
                <option key={doctor} value={doctor}>
                  {doctor}
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
            />
          </FormControl>

          <CustomButton type="submit" className={styles.btn}>
            Submit
          </CustomButton>
        </form>
      </Box>
    </section>
  );
};

export default Appointment;
