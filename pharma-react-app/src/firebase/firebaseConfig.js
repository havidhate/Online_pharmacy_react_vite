import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//     apiKey: "AIzaSyDJ7YFne4QBWBcE45KUOmV8yIyHZP40rYI",
//     authDomain: "onlinepharmacyreact.firebaseapp.com",
//     databaseURL: "https://onlinepharmacyreact-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "onlinepharmacyreact",
//     storageBucket: "onlinepharmacyreact.firebasestorage.app",
//     messagingSenderId: "1027126627603",
//     appId: "1:1027126627603:web:ac16ee5768221e17f99ee6",
//     measurementId: "G-TXE599JF0B"
//   };
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
