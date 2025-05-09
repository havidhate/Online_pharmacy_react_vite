// Firebase initialization and exports
import { initializeApp } from 'firebase/app';
import { getAuth }         from 'firebase/auth';
import { getFirestore }    from 'firebase/firestore';
import { getStorage }      from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDJ7YFne4QBWBcE45KUOmV8yIyHZP40rYI",
  authDomain: "onlinepharmacyreact.firebaseapp.com",
  databaseURL: "https://onlinepharmacyreact-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "onlinepharmacyreact",
  storageBucket: "onlinepharmacyreact.firebasestorage.app",
  messagingSenderId: "1027126627603",
  appId: "1:1027126627603:web:ac16ee5768221e17f99ee6",
  measurementId: "G-TXE599JF0B"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth        = getAuth(firebaseApp);
export const db          = getFirestore(firebaseApp);
export const storage     = getStorage(firebaseApp);
