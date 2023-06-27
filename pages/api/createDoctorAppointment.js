import { firebase_app } from "@/firebaseConfig";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export default async function createAppointment(req, res) {
  // Retrieve the appointment data from the request body
  const { firstName, lastName, contactNumber, selectedDoctor, city } = req.body;

  try {
    const db = getFirestore(firebase_app);
    const doctorRef = collection(db, "doctors");
    const doctorQuery = query(doctorRef, where("name", "==", selectedDoctor));
    const doctorSnapshot = await getDocs(doctorQuery);

    if (doctorSnapshot.empty) {
      // Create a new doctor document in the "doctors" collection
      const newDoctorDoc = await addDoc(doctorRef, {
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

      // console.log("Appointment created successfully with doctor ID:", doctorId);
      // console.log("Patient data added successfully with ID:", patientId);

      res.status(200).json({
        doctorId,
        patientId,
      });
    } else {
      // Use the existing doctor ID
      const doctorId = doctorSnapshot.docs[0].id;

      // Create a new document in the "patients" subcollection within the existing doctor's document
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

      // console.log(
      //   "Appointment created successfully with existing doctor ID:",
      //   doctorId
      // );
      // console.log("Patient data added successfully with ID:", patientId);

      res.status(200).json({
        doctorId,
        patientId,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create appointment" });
  }
}
