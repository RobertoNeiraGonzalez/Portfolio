// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9hbr4zdbaL5M70UisYjafrK3OX6jOQEA",
  authDomain: "portfolio-robert.firebaseapp.com",
  projectId: "portfolio-robert",
  storageBucket: "portfolio-robert.appspot.com",
  messagingSenderId: "348370271075",
  appId: "1:348370271075:web:5d8c6442bf1c2024d5f156",
  measurementId: "G-6WREZ5521Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);