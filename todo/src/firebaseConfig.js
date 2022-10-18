// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfbpqhmw24Y7EAX0Wzddj1Mnaw1j-dY1I",
  authDomain: "todo-d94fb.firebaseapp.com",
  databaseURL: "https://todo-d94fb-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "todo-d94fb",
  storageBucket: "todo-d94fb.appspot.com",
  messagingSenderId: "802090839200",
  appId: "1:802090839200:web:b6c322f49470ecc1aaadc5",
  measurementId: "G-66JNKXY82T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db };