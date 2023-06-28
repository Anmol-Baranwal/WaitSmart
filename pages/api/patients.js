import { getFirestore, collection, getDocs } from "firebase/firestore";
import { firebase_app } from "@/firebaseConfig";

export default async function handler(req, res) {
  const { doctorId } = req.query;

  //   console.log(req.query.doctorId);
  try {
    const db = getFirestore(firebase_app);
    const patientsRef = collection(db, "doctors", doctorId, "patients");
    const patientsSnapshot = await getDocs(patientsRef);
    // console.log({ patientsRef });
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
