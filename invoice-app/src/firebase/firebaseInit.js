import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCgAkD-re9j-HoAWhxdA7FBTlRQpCD29gs",
    authDomain: "invoiceapp-42772.firebaseapp.com",
    projectId: "invoiceapp-42772",
    storageBucket: "invoiceapp-42772.appspot.com",
    messagingSenderId: "725130547101",
    appId: "1:725130547101:web:04d4b2363e598bb1426974"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()