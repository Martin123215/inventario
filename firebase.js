// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwo5QyyVgbwrQX10u8Fls59imdrNqEESM",
  authDomain: "inven-d458a.firebaseapp.com",
  projectId: "inven-d458a",
  storageBucket: "inven-d458a.firebasestorage.app",
  messagingSenderId: "420195585893",
  appId: "1:420195585893:web:6ffc43afe908239c291b8c",
  measurementId: "G-L5Y3834DEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
