import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import {
  getDatabase
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-database.js";

const firebaseConfig = {

  apiKey: "TU_APIKEY",

  authDomain: "TU_PROYECTO.firebaseapp.com",

  databaseURL:
  "https://TU_PROYECTO-default-rtdb.firebaseio.com",

  projectId: "TU_PROYECTO",

  storageBucket:
  "TU_PROYECTO.firebasestorage.app",

  messagingSenderId: "XXXX",

  appId: "XXXX"

};

const app =
initializeApp(firebaseConfig);

export const db =
getDatabase(app);
