//import react & external tools
import React from "react";
import { Button, Form, } from "react-bootstrap";
import PropTypes from "prop-types";
//import helper functions
import {createAnime , animeAlreadyExists, addAppearanceByID} from '../lib/animeHandler'
import { createPlace, addAnimelinkToPlace, searchPlaceByCoords } from '../lib/placeHandler'

class AddPlaceForm extends React.Component {
  //place refs
  placeNameRef = React.createRef();
  realImgRef = React.createRef();
  longitudeRef = React.createRef();
  latitudeRef = React.createRef();
  countryRef = React.createRef();
  townRef = React.createRef();
  tagRef = React.createRef();
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
 /**
  * creates a new anime on submit
  * @param {*} event 
  */
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
    window.location.reload();
  }
/**
 * creates a new place, add new appearance to anime
 * @param {*} event 
 */
  createData = async (event) => {
    // stop the form from submitting
    event.preventDefault();
    // check if anime has been selected
    if(this.selectedAnimeID=== ''){
      alert('Bitte Anime auswählen')
    }else{
      //check if there is already a place with entered coordinates
      const alreadExistingPlace = searchPlaceByCoords(this.props.places, [parseFloat(this.longitudeRef.current.value), parseFloat(this.latitudeRef.current.value)])
    console.log(alreadExistingPlace)
      if(alreadExistingPlace){
        //add new appaerance to selected anime
        addAnimelinkToPlace(alreadExistingPlace.properties.id, this.selectedAnimeID)
        alert('Vielen Dank')
        //create new appearence using the existing placeID
        const appearence = {
          animePictureUrl: this.animeImgRef.current.value,
          description: this.descRef.current.value,
          episode: this.episodeRef.current.value,
          placeID:alreadExistingPlace.properties.id
        }
         //add appearence to selected anime
          addAppearanceByID(this.selectedAnimeID, appearence)
      }else{
        //define place and match refs for values
        const place = {
            coordinates: [parseFloat(this.longitudeRef.current.value), parseFloat(this.latitudeRef.current.value)],   
            realImg: this.realImgRef.current.value,
            placeName: this.placeNameRef.current.value,
            town: this.townRef.current.value,
            linkedAnime: [this.selectedAnimeID],
            tag: [this.tagRef]
          }
        //add new place to db
        const newDocRef = await createPlace(place)
        const newPlaceID = newDocRef.id;
        //create new appearence using the new placeID
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
    alert('Vielen Dank')
    event.currentTarget.reset();
    // window.location.reload();
  };

  handler = event => {
    this.selectedAnimeID = event.target.value;
  }
  handleRadioChange = event => {
    this.tagRef = event.target.value;
  }

  render() {
    return (
      <div>
        <section>
          <Form className="createAnime" onSubmit={this.addAnime}>
            <Form.Group>
            <Form.Control 
              name="title" 
              ref={this.animeTitleRef} 
              type="text" 
              placeholder="Anime title" 
            />
            <Button type="submit">+ Add Anime</Button>
            </Form.Group>
          </Form>
        </section>
        <br/>
        <section>
          <Form.Select name="animeSelect" id="animeSelect" onChange={this.handler}>
              <option value='' key='default' defaultValue>Please choose an anime</option>
              {this.props.animeCollection.map(anime => (
                  <option value={anime.id} key={anime.id}>{anime.title}</option>
                )
              )};
          </Form.Select>
          <Form className="createPlace" onSubmit={this.createData}>
            <Form.Group>
            <p className="location">
              <Form.Control 
                name="name" 
                ref={this.placeNameRef} 
                type="text" 
                placeholder="Place name (required)" 
                required
              />
              <Form.Control 
                name="city" 
                ref={this.townRef} 
                type="text" 
                placeholder="City or area" 
              />
              <Form.Control 
                name="country" 
                ref={this.countryRef} 
                type="text" 
                placeholder="Country" 
              />
            </p>
            <div>
            <input type="radio" id="building" name="tag" value="building" onChange={this.handleRadioChange}/>
            <label>Building</label><br/>
            <input type="radio" id="nature" name="tag" value="nature" onChange={this.handleRadioChange}/>
            <label>Natural Site</label>
            </div>
            <p className="coordinates">
              <Form.Control
                name="longitude"
                ref={this.longitudeRef}
                type="text"
                placeholder="Longitude (required)"
                required
              />
              <Form.Control
                name="latitude"
                ref={this.latitudeRef}
                type="text"
                placeholder="Latitude (required)"
                required
              />
            </p>
            <p className="anime_info">
              <Form.Control 
                name="episode" 
                ref={this.episodeRef} 
                type="text" 
                placeholder="Episode or Movie"
              />
            </p>
            <p className="pictures">
              <Form.Control
                name="animeImg"
                ref={this.animeImgRef}
                type="text"
                placeholder="Image from the anime"
              />
              <Form.Control
                name="realImg"
                ref={this.realImgRef}
                type="text"
                placeholder="Real image"
              />
            </p>
            <p>
            <Form.Control as ="textarea" name="desc" ref={this.descRef} placeholder="Desc" />
            </p>
            <Button type="submit">+ Add Place</Button>
            </Form.Group>
          </Form>
        </section>  
      </div>
    );
  }
}

export default AddPlaceForm;
