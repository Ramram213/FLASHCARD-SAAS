// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf5VRK4Gq6aBKlVyqhRSUOP66TLPlWk8c",
  authDomain: "flashcard-saas-cf784.firebaseapp.com",
  projectId: "flashcard-saas-cf784",
  storageBucket: "flashcard-saas-cf784.appspot.com",
  messagingSenderId: "1042360985678",
  appId: "1:1042360985678:web:3876eedef2ddd5723b3b1f",
  measurementId: "G-36801Z4XJF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

