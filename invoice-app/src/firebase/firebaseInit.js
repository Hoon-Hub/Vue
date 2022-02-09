import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCgAkD-re9j-HoAWhxdA7FBTlRQpCD29gs",
  authDomain: "invoiceapp-42772.firebaseapp.com",
  projectId: "invoiceapp-42772",
  storageBucket: "invoiceapp-42772.appspot.com",
  messagingSenderId: "725130547101",
  appId: "1:725130547101:web:04d4b2363e598bb1426974"
})

const db = getFirestore(firebaseApp)

export default db