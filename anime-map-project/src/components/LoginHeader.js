import "../Login.css";
import { useState } from "react";
import { auth } from "../firebase-config";
import {  GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { Button } from "react-bootstrap";
import { IoLogInSharp, IoLogOutSharp,IoDuplicateSharp } from "react-icons/io5";


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
  if (!user) {
  return (
    <div className="App">
      <center>
        <Button onClick={signInWithGoogle}>Login with Google <IoLogInSharp/></Button>
      </center>
    </div>
  );
  } else if (user) {
    return (
    <div className="App">
    <br/>
    <center><img src={user?.photoURL} id="userProfilePicture"/></center>
    <br/><center><h4>Welcome {user?.displayName}</h4></center>
    <h5>You can now add Anime places to the map. Simply click on the <IoDuplicateSharp/> above your profile picture.</h5>
    <br/><h5>Email: {user?.email}</h5>
    <br/><center>        <Button onClick={logout}>Logout <IoLogOutSharp/></Button>
</center>
  </div>
    );
  }
}


export default App;