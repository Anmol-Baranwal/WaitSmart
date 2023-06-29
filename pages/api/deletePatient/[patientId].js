import {
  getFirestore,
  doc,
  deleteDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { firebase_app } from "@/firebaseConfig";

export default async function handler(req, res) {
  const { doctorId, patientId } = req.query;

  try {
    const db = getFirestore(firebase_app);
    const doctorsCollectionRef = collection(db, "doctors");

    const querySnapshot = await getDocs(doctorsCollectionRef);

    const doctorDoc = querySnapshot.docs.find(
      (doc) => doc.data().name === doctorId
    );

    if (!doctorDoc) {
      console.log("Doctor not found");
      return res.status(404).json({ error: "Doctor not found" });
    }

    const patientsCollectionRef = collection(doctorDoc.ref, "patients");
    const patientDocRef = doc(patientsCollectionRef, patientId);

    await deleteDoc(patientDocRef);

    res.status(200).json({ message: "Patient record deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to delete patient record" });
  }
}
