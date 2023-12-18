// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhlQZtlvLTLZ_y_Z1NgFwN7ARr-nqMkoc",
  authDomain: "cityhospital-fcb7c.firebaseapp.com",
  projectId: "cityhospital-fcb7c",
  storageBucket: "cityhospital-fcb7c.appspot.com",
  messagingSenderId: "112817195583",
  appId: "1:112817195583:web:26045efed77187a6cac68a",
  measurementId: "G-1RTPCKLRLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

