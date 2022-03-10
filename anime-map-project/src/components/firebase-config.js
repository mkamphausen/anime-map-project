import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkdXXsq_pIIGoVZYFWjJQZSyXtJ6yg4f8",
  authDomain: "user-auth-test-afebe.firebaseapp.com",
  projectId: "user-auth-test-afebe",
  storageBucket: "user-auth-test-afebe.appspot.com",
  messagingSenderId: "617636654907",
  appId: "1:617636654907:web:72c17ebd069d5242c3911e",
  measurementId: "G-VJ95Z1BCRG"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
