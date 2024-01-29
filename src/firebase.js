// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyE8iYPDOhdlPvjjsoaAPt0NYrC4FoLOU",
  authDomain: "chat-room-492f8.firebaseapp.com",
  projectId: "chat-room-492f8",
  storageBucket: "chat-room-492f8.appspot.com",
  messagingSenderId: "570279170222",
  appId: "1:570279170222:web:4763edc67bade4e04f1d3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

