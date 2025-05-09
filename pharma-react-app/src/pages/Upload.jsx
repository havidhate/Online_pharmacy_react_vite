import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UploadPrescription from "../components/UploadPrescription";
import { storage, db } from "../firebase/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useAuth } from "../features/auth/useAuth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Upload = () => {
  const { user } = useAuth();

  const handleUpload = async (file) => {
    if (!user) {
      alert("Please login to upload your prescription.");
      return;
    }
    const storageRef = ref(storage, `prescriptions/${user.uid}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      null,
      (error) => alert(error.message),
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        await addDoc(collection(db, "prescriptions"), {
          userId: user.uid,
          url,
          name: file.name,
          createdAt: serverTimestamp(),
        });
        alert("Prescription uploaded successfully!");
      }
    );
  };

  return (
    <>
      <div className="max-w-lg mx-auto my-8">
        <UploadPrescription onUpload={handleUpload} />
      </div>
    </>
  );
};

export default Upload;
