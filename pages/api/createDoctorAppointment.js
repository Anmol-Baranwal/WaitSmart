import { firebase_app } from "@/firebaseConfig";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export default async function createDoctorPatient(req, res) {
  // Retrieve the doctor data from the request body
  const { name } = req.body;

  // Create a new doctor document in the "doctors" collection
  try {
    const db = getFirestore(firebase_app);
    const doctorsCollection = collection(db, "doctors");
    const newDoctorDoc = await addDoc(doctorsCollection, { name });

    res.status(200).json({ doctorId: newDoctorDoc.id });
  } catch (error) {
    console.error("Error creating doctor:", error);
    res.status(500).json({ error: "Failed to create doctor" });
  }
}
