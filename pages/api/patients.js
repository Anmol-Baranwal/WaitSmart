import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { firebase_app } from "@/firebaseConfig";

export default async function handler(req, res) {
  const { doctorId } = req.query;

  try {
    const db = getFirestore(firebase_app);
    const doctorsCollectionRef = collection(db, "doctors");

    const querySnapshot = await getDocs(
      query(doctorsCollectionRef, where("name", "==", doctorId))
    );

    if (querySnapshot.docs.length === 0) {
      console.log("Doctor not found");
      return res.status(404).json({ error: "Doctor not found" });
    }

    const doctorDocRef = querySnapshot.docs[0].ref;
    const patientsRef = collection(doctorDocRef, "patients");
    const patientsSnapshot = await getDocs(patientsRef);

    const patientsData = patientsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json({ patients: patientsData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch patient records" });
  }
}
