// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEacZFRJTgzjcophbLaEPSF53TizPLk5I",
  authDomain: "ambika-2025.firebaseapp.com",
  projectId: "ambika-2025",
  storageBucket: "ambika-2025.firebasestorage.app",
  messagingSenderId: "603783829394",
  appId: "1:603783829394:web:df606c13ab07078924134b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
