import "../App.css";
import { useState } from "react";
import { auth } from "../firebase-config";
import {  GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

function App() {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = () => {
    if(user) {
      signOut(auth);
    localStorage.clear();
    console.log("Logged out");
    } else {
      alert("You're not logged in.")
    }
    
  };

  return (
    <div className="App">
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <button onClick={logout}> Sign Out </button>
      <h4>{user?.displayName}</h4>
      <h4>{user?.email}</h4>
      <img src={user?.photoURL} />
    </div>
  );
}

export default App;