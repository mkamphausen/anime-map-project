import ReactDOM from "react-dom";
import React, { useRef, useEffect } from "react";

import "./App.css"

import Map from "./components/Map"
import Header from "./components/Header"

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
    <Header tagline="Hello shitty world"/>
    <div className="content">
      <Map/>
    </div>
    </>
  );
};

export default App;
