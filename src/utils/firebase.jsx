// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXxIkyfP5MnHOtP7p_T6S3Kzq6QtOPXD0",
  authDomain: "netflixgpt-3a125.firebaseapp.com",
  projectId: "netflixgpt-3a125",
  storageBucket: "netflixgpt-3a125.firebasestorage.app",
  messagingSenderId: "667978674665",
  appId: "1:667978674665:web:2a86c161a10e3a22fc1b78",
  measurementId: "G-7XWE6RTEQ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);