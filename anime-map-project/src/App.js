//import react & external tools
import React, {useEffect} from "react";
//import components
import Map from "./components/Map"
// import NewMap from "./components/NewMap"
import Header from "./components/Header"
//import helper functions
import { getPlaces } from './lib/placeHandler';
import { getAnime } from './lib/animeHandler';
//bootstrap & styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

class App extends React.Component {

  //state - where the data lives
  state = {
    places: {},
    anime:{}
  };
  
  fetchPlaces = async () => {
    const places = await getPlaces();
    this.setState({ places });
  }

  fetchAnime = async () => {
    const anime = await getAnime();
    this.setState({ anime });
  }

  //load data from db
  componentDidMount() {
    this.fetchPlaces();
    this.fetchAnime();
  }

  render(){
    return (
      <>
        <Header
          addPlace={this.addPlace}
          places={this.state.places} 
          animeCollection={this.state.anime}
        />
        {/* content */}
        <div className="content">
          {/* <NewMap places={this.state.places} animeCollection={this.state.anime}/> */}
          <Map id="map" places={this.state.places} animeCollection={this.state.anime}/>
        </div>
      </>
    );
  }
};

export default App;
