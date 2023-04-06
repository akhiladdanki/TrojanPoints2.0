// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getFirestore,collection, addDoc,getDocs ,updateDoc,doc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQVMGP9Jyo63lfqVErshvggsQcHADez7Q",
  authDomain: "tetrajon-3ffa7.firebaseapp.com",
  projectId: "tetrajon-3ffa7",
  storageBucket: "tetrajon-3ffa7.appspot.com",
  messagingSenderId: "853614004127",
  appId: "1:853614004127:web:79f529ab9f3b647e74dfaa",
  measurementId: "G-4G2GMSS28Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);

export {app,db,getFirestore,collection,addDoc,getDocs ,updateDoc,doc}