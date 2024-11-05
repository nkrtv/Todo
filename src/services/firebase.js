import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "team-todo-app.firebaseapp.com",
  projectId: "team-todo-app",
  storageBucket: "team-todo-app.appspot.com",
  messagingSenderId: "763662489034",
  appId: "1:763662489034:web:8a4318a1921b2bdba4ab33",
  measurementId: "G-NVRBGY8SYC"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

