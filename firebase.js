import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import {
  getDatabase
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDwo5QyyVgbwrQX10u8Fls59imdrNqEESM",
  authDomain: "inven-d458a.firebaseapp.com",
  databaseURL: "https://inven-d458a-default-rtdb.firebaseio.com",
  projectId: "inven-d458a",
  storageBucket: "inven-d458a.firebasestorage.app",
  messagingSenderId: "420195585893",
  appId: "1:420195585893:web:6ffc43afe908239c291b8c",
  measurementId: "G-L5Y3834DEG"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
