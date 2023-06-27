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
  doc,
  setDoc,
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
    if (e) e.preventDefault();

    try {
      // Create a new doctor document in the "doctors" collection
      const newDoctorDoc = await addDoc(collection(db, "doctors"), {
        name: selectedDoctor,
      });
      const doctorId = newDoctorDoc.id;

      // Create a new document in the "patients" subcollection within the doctor's document
      const newPatientDoc = await addDoc(
        collection(db, "doctors", doctorId, "patients"),
        {
          firstName,
          lastName,
          contactNumber,
          city,
        }
      );
      const patientId = newPatientDoc.id;

      console.log("Appointment created successfully with doctor ID:", doctorId);
      console.log("Patient data added successfully with ID:", patientId);

      router.push("/appointment");
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
              required
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              className={styles.select}
              placeholder="Choose your doctor"
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
            />
          </FormControl>

          <CustomButton
            type="submit"
            className={styles.btn}
            onClick={handleSubmit}
          >
            Submit
          </CustomButton>
        </form>
      </Box>
    </section>
  );
};

export default Appointment;
