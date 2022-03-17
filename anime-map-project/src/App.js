import React, {useEffect} from "react";
import "./App.css"

//import components
import Map from "./components/Map"
import Header from "./components/Header"
//import data
import { getPlaces } from './lib/placeHandler';
import { getAnime } from './lib/animeHandler';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

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
          <Map id="map" places={this.state.places} animeCollection={this.state.anime}/>
        </div>
      </>
    );
  }
};

export default App;
