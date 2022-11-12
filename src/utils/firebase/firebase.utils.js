// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmCIvzwjZyYCn_ksoyEL85h9RDFvyT_eY",
  authDomain: "crwn-clothing-db-67b07.firebaseapp.com",
  projectId: "crwn-clothing-db-67b07",
  storageBucket: "crwn-clothing-db-67b07.appspot.com",
  messagingSenderId: "1087084564014",
  appId: "1:1087084564014:web:40a8c2002832d0ac3ad9bf",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.getCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);