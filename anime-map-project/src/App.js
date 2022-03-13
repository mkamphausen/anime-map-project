import ReactDOM from "react-dom";
import React, { useRef, useEffect } from "react";
import "./App.css"

//import components
import NewMap from "./components/Map"
import Header from "./components/Header"
import Data from "./components/Data"
//import test data
import samplePlaces from './samplePlaces'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

  const DEBUG = true;

class App extends React.Component {

  //state - where the data lives
  state = {
    places: {}
  };

  //lifecycle method
  // componentDidMount() {
  //   if(DEBUG){
  //     console.log("MOUNTED!")
  //   }
  //   this.ref = base.syncState(``);
  // }

  // function for adding places to the state
  addPlace = place => {
    //1. take copy of existing state
    const places = [...this.state.places];
    //2. Add our new place to that places variable
    // places[`place${Date.now()}`] = place;
    console.log(places);
    places.push(place);
    //3. set the new places object to state
    this.setState({ places });
  }

  // funtcion for loading sample data into state
  loadSamplePlaces = () => {
    if(DEBUG){
      console.log('load sample places');
    }
    this.setState({places: samplePlaces});
  }

  render(){
    return (
      <>
      
      {/* <div className="container"> */}
        <Header
          loadSamplePlaces={this.loadSamplePlaces}
          addPlace={this.addPlace}
        />
        {/* content */}
        <div className="content">
          <Data 
            loadSamplePlaces={this.loadSamplePlaces} 
            addPlace={this.addPlace}
          />
            {/* TEST: DATA IMPORT - USE/DISPLAY DATA */}
            {/* <div className="testData">
              {Object.keys(this.state.places).map(key => 
                          <div key={key}>
                            {key}: {this.state.places[key].properties.placeName}
                            <p>
                            longitude: {this.state.places[key].geometry.coordinates[0]} <br/>
                            latitude: {this.state.places[key].geometry.coordinates[1]}
                            </p>
                            <p>
                              picture anime:
                              <img src={this.state.places[key].properties.animeImg} alt={this.state.places[key].properties.placeName} />
                            </p>
                            <p>
                              picture anime:
                              <img src={this.state.places[key].properties.realImg} alt={this.state.places[key].properties.placeName} />
                            </p>
                          </div>
                        )}
            </div> */}
          {/* MAP-Component */}
          {/* <Map id="map" details={this.state.places}/> */}
          <NewMap id="map" places={this.state.places}/>
        </div>
      {/* </div> */}
      </>
    );
  }
};

export default App;
