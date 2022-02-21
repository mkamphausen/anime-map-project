import Rebase from 're-base';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAwEK01MqpJd1vWhpC6rxVoOqwd6g7kV8Y",
  authDomain: "anime-web-project.firebaseapp.com",
  databaseURL: "https://anime-web-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "anime-web-project",
  storageBucket: "anime-web-project.appspot.com",
  messagingSenderId: "8904511832",
  appId: "1:8904511832:web:7e96c0fdc42c74df55952d",
  measurementId: "G-0B48TEMFZJ"
})

const base = Rebase.createClass(firebaseApp.database());

//named export
export {app};

// default export
export default base;
