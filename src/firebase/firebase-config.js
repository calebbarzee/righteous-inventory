// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { getFirestore, getDocs, collection } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyCv-8EmQhklABCEYBwpMNrHqX5p44ZUvN8",
  authDomain: "righteousinventory-34278.firebaseapp.com",
  projectId: "righteousinventory-34278",
  storageBucket: "righteousinventory-34278.appspot.com",
  messagingSenderId: "704781166373",
  appId: "1:704781166373:web:8bfc4e7fed98aea0b59ccc",
  measurementId: "G-7HCW3VG0FF"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const storage = firebaseApp.storage();
const auth = firebaseApp.auth();
export {db, storage, auth, getFirestore, getDocs, collection, firebase as default};
  