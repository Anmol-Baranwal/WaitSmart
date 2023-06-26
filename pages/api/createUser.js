import { getFirestore, collection, addDoc } from "firebase/firestore";
import { firebase_app } from "@/firebaseConfig";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { collectionName, data } = req.body;

      const db = getFirestore(firebase_app);

      // Create a new document in the specified collection
      const newDocRef = await addDoc(collection(db, collectionName), data);

      // Retrieve the auto-generated document ID
      const docId = newDocRef.id;

      res.status(200).json({ success: true, docId });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, error: "Failed to create collection" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method not allowed" });
  }
}
