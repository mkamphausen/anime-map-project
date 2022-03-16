import React, {useEffect} from "react";
import "./App.css"

//import components
import NewMap from "./components/Map"
import Header from "./components/Header"
import Data from "./components/TestData"
//import data
import { getPlaces } from './lib/placeHandler';
import { getAnime } from './lib/animeHandler';
import samplePlaces from './samplePlaces'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {

  //state - where the data lives
  state = {
    places: {},
    anime:{}
  };

  

  // function for adding places to the state
  addPlace = place => {
    //1. take copy of existing state
    const places = [...this.state.places];
    //2. Add our new place to that places variable
    // places[`place${Date.now()}`] = place;
    places.push(place);
    //3. set the new places object to state
    this.setState({ places });
  }
  
  fetchPlaces = async () => {
    const places = await getPlaces();
    this.setState({ places });
  }

  fetchAnime = async () => {
    const anime = await getAnime();
    this.setState({ anime });
  }

  componentDidMount() {
    this.fetchPlaces();
    this.fetchAnime();
  }

  // funtcion for loading sample data into state
  loadSamplePlaces = () => {
    this.setState({places: samplePlaces});
  }

  render(){
    return (
      <>
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
          <NewMap id="map" places={this.state.places} animeCollection={this.state.anime}/>
        </div>
      </>
    );
  }
};

export default App;
