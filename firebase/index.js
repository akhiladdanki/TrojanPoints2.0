// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlvMFEaAruvpANsF-T8pPfR3XtPnldptg",
  authDomain: "trojan-d65df.firebaseapp.com",
  databaseURL: "https://trojan-d65df-default-rtdb.firebaseio.com",
  projectId: "trojan-d65df",
  storageBucket: "trojan-d65df.appspot.com",
  messagingSenderId: "125893452520",
  appId: "1:125893452520:web:79602087d993275c50df5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db=getDatabase(app);