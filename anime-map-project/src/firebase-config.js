import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import 'firebase/database';

import { getFirestore } from 'firebase/firestore/lite';
import { IoPlayForwardCircleSharp } from "react-icons/io5";

const firebaseConfig = {
    apiKey: "AIzaSyAwEK01MqpJd1vWhpC6rxVoOqwd6g7kV8Y",
    authDomain: "anime-web-project.firebaseapp.com",
    databaseURL: "https://anime-web-project-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "anime-web-project",
    storageBucket: "anime-web-project.appspot.com",
    messagingSenderId: "8904511832",
    appId: "1:8904511832:web:7e96c0fdc42c74df55952d",
    measurementId: "G-0B48TEMFZJ"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
