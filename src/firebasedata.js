// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdib52CCjXacWOwiScDaivtPyp4A_wNXM",
  authDomain: "shoponair-5e528.firebaseapp.com",
  projectId: "shoponair-5e528",
  storageBucket: "shoponair-5e528.appspot.com",
  messagingSenderId: "73600692531",
  appId: "1:73600692531:web:436546a1df32e07ac68e46",
  measurementId: "G-0M633VDH31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);