import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT1ml5HsfLqla844kjnaJq5C80_HWI6Vw",
  authDomain: "dream-shelter-cce6d.firebaseapp.com",
  projectId: "dream-shelter-cce6d",
  storageBucket: "dream-shelter-cce6d.appspot.com",
  messagingSenderId: "139495408235",
  appId: "1:139495408235:web:9046a8a2e77ac1d2ac672e"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()

export {db, auth}