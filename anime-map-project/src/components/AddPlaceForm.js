import React from "react";
import PropTypes from "prop-types";

import {createAnime , animeAlreadyExists, addAppearanceByID} from '../lib/animeHandler'
import { createPlace, placeAlreadyExists } from '../lib/placeHandler'

class AddPlaceForm extends React.Component {
  //place refs
  placeNameRef = React.createRef();
  realImgRef = React.createRef();
  longitudeRef = React.createRef();
  latitudeRef = React.createRef();
  countryRef = React.createRef();
  townRef = React.createRef();
  //anime refs
  animeTitleRef = React.createRef();
  animeImgRef = React.createRef();
  descRef = React.createRef();
  episodeRef = React.createRef();
  //selectedAnimeID
  selectedAnimeID = '';

  static propTypes = {
    addPlace: PropTypes.func
  };
 
  addAnime = event =>{
    // stop the form from submitting
    event.preventDefault();
    // check if new title has been entered
    if(this.animeTitleRef.current.value === ''){
      alert('Bitte gib einen Titel ein')
    }else{
      //check if entered title already exists
      if(!animeAlreadyExists(this.props.animeCollection, this.animeTitleRef.current.value)){
        //add new anime to db
        createAnime(this.animeTitleRef.current.value)

        // push to state
        this.props.animeCollection.push({
          title: this.animeTitleRef.current.value,
          appearences:[]
        })
      }else{
        alert('anime already exists')
      }
    }
    // refresh the form
    event.currentTarget.reset();
  }


  createData = async (event) => {
    // stop the form from submitting
    event.preventDefault();
    // check if anime has been selected
    if(this.selectedAnimeID=== ''){
      alert('Bitte Anime auswählen')
    }else{
      if(placeAlreadyExists(this.props.places, [parseFloat(this.longitudeRef.current.value), parseFloat(this.latitudeRef.current.value)])){
        //add new appaerance to selected anime
      }else{
        //define place and match refs for values
        const place = {
            coordinates: [parseFloat(this.longitudeRef.current.value), parseFloat(this.latitudeRef.current.value)],   
            realImg: this.realImgRef.current.value,
            placeName: this.placeNameRef.current.value,
            town: this.townRef.current.value,
            linkedAnime: [this.selectedAnimeID]
          }
        //add new place to db
        const newDocRef = await createPlace(place)
        const newPlaceID = newDocRef.id;
        //create new appearence
        const appearence = {
            animePictureUrl: this.animeImgRef.current.value,
            description: this.descRef.current.value,
            episode: this.episodeRef.current.value,
            placeID:newPlaceID
          }
        //add appearence to selected anime
        addAppearanceByID(this.selectedAnimeID, appearence)
        console.log(newPlaceID)
      }
    }
    // refresh the form
    event.currentTarget.reset();
  };

  handler = event => {
    this.selectedAnimeID = event.target.value;
  }

  render() {
    return (
      <div>
        <section>
          <form className="createAnime" onSubmit={this.addAnime}>
            <input 
              name="title" 
              ref={this.animeTitleRef} 
              type="text" 
              placeholder="Anime title" 
            />
            <button type="submit">+ Add Anime</button>
          </form>
        </section>
        ---
        <section>
          <select name="animeSelect" id="animeSelect" onChange={this.handler}>
              <option value='' key='default' defaultValue>Bitte Anime auswählen</option>
              {this.props.animeCollection.map((anime) => (
                  <option value={anime.id} key={anime.id}>{anime.title}</option>
                )
              )};
          </select>
          <form className="createPlace" onSubmit={this.createData}>
            <p className="location">
              <input 
                name="name" 
                ref={this.placeNameRef} 
                type="text" 
                placeholder="place name*" 
                required
              />
              <input 
                name="city" 
                ref={this.townRef} 
                type="text" 
                placeholder="City or area" 
              />
              <input 
                name="country" 
                ref={this.countryRef} 
                type="text" 
                placeholder="country" 
              />
            </p>
            <p className="coordinates">
              <input
                name="longitude"
                ref={this.longitudeRef}
                type="text"
                placeholder="longitude*"
                required
              />
              <input
                name="latitude"
                ref={this.latitudeRef}
                type="text"
                placeholder="latitude*"
                required
              />
            </p>
            <p className="anime_info">
              <input 
                name="episode" 
                ref={this.episodeRef} 
                type="text" 
                placeholder="Episode oder Film"
              />
            </p>
            <p className="pictures">
              <input
                name="animeImg"
                ref={this.animeImgRef}
                type="text"
                placeholder="Image from the anime"
              />
              <input
                name="realImg"
                ref={this.realImgRef}
                type="text"
                placeholder="Real image"
              />
            </p>
            <p>
            <textarea name="desc" ref={this.descRef} placeholder="Desc" />
            </p>
            <button type="submit">+ Add Place</button>
          </form>
        </section>  
      </div>
    );
  }
}

export default AddPlaceForm;
