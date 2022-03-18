//import react & external tools
import React from "react";
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
    places: [],
    anime:[],
    filter:{
      buildings:false,
      nature:false,
      animeID:''
    }
  };

 //update filter
  updateFilterBuildings = (newBuilding, oldNature, oldAnimeID) => {
    this.setState({ filter: {buildings: newBuilding, nature: oldNature, animeID: oldAnimeID}});
  }
  updatefilterNature = (oldBuilding, newNature, oldAnimeID) => {
    this.setState({ filter: {buildings: oldBuilding, nature: newNature, animeID: oldAnimeID}});
  }
  updatefilterAnimeID = (oldBuilding, oldNature, newAnimeID) => {
    this.setState({ filter: {buildings: oldBuilding, nature: oldNature, animeID: newAnimeID}});
  }
  
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
      <div id="view">
        <Header
          filter = {this.state.filter}
          places = {this.state.places} 
          animeCollection = {this.state.anime}
          updateFilterBuildings = {this.updatefilterAnimeID}
          updatefilterNature = {this.updatefilterAnimeID}
          updatefilterAnimeID = {this.updatefilterAnimeID}
        />
          {/* <NewMap places={this.state.places} animeCollection={this.state.anime}/> */}
        <div>
        <Map 
          id="map" 
          places = {this.state.places} 
          animeCollection = {this.state.anime}
          filter = {this.state.filter}
        />
        </div>
      </div>
      </>
    );
  }
};

export default App;
