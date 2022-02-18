import ReactDOM from "react-dom";
import React, { useRef, useEffect } from "react";

import "./App.css"

//import components
import Map from "./components/Map"
import Header from "./components/Header"
import Data from "./components/Data"

//import test data
import samplePlaces from './samplePlaces'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

  const DEBUG = true;

class App extends React.Component {
  state = {
    places: {}
  };

  addPlace = place => {
    //1. take copy of existing state
    const places = {...this.state.fishes};
    //2. Add our new place to that places variable
    places[`place${Date.now()}`] = place;
    //3. set the new places object to state
    this.setState({ places });
  }
  loadSamplePlaces = () => {
    if(DEBUG){
      console.log('load sample places');
    }
    this.setState({places: samplePlaces});
  }

  render(){
    return (
      <>
      
      <div className="container">
        <Header/>
        {/* content */}
        <div className="content">
          <Data 
            loadSamplePlaces={this.loadSamplePlaces} 
          />
                          <div className="testData">
                    {Object.keys(this.state.places).map(key => <p key={key}>{key}</p>)}
                </div>
          <Map/>
        </div>
      </div>
      </>
    );
  }
};

export default App;
