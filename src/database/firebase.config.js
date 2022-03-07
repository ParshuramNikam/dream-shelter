// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKrMSeg67C_PeazfUxJ6z9vaE7HEPTuyU",
  authDomain: "dream-shelter.firebaseapp.com",
  projectId: "dream-shelter",
  storageBucket: "dream-shelter.appspot.com",
  messagingSenderId: "661840236533",
  appId: "1:661840236533:web:a298af7a428b436c675abc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth();

export {db, auth}