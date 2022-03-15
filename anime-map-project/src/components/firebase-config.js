import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAwEK01MqpJd1vWhpC6rxVoOqwd6g7kV8Y",
  authDomain: "anime-web-project.firebaseapp.com",
  databaseURL: "https://anime-web-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "anime-web-project",
  storageBucket: "anime-web-project.appspot.com",
  messagingSenderId: "8904511832",
  appId: "1:8904511832:web:7e96c0fdc42c74df55952d",
  measurementId: "G-0B48TEMFZJ"
});


export const auth = app.auth()
export default app
