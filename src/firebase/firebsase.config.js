// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB18-wZeEnCtHrx7h3odA3Za5BNmsU7x9A",
  authDomain: "cashify-437de.firebaseapp.com",
  projectId: "cashify-437de",
  storageBucket: "cashify-437de.appspot.com",
  messagingSenderId: "809454692221",
  appId: "1:809454692221:web:718e0122d718e1fb12ce14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app