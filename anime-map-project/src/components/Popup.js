//import react & external tools
import React, {useState, useRef} from 'react'
//import helper functions
import { filterAppearancesForPlace } from '../lib/FilterHandler'
//Import bootstrap & styles
import {Overlay, Button, Tooltip} from 'react-bootstrap'
import "../Popup.css";
import noIMG from '../noIMG.jpg';

//recieves an array of all anime, which are linked to the specififc feature(place)
const Popup = ({ feature, linkedAnimeCollection }) => {
  //get feature information
  const appearances = filterAppearancesForPlace(linkedAnimeCollection, feature);
  const {id, name, realImg, city, country } = feature.properties;
  const {coordinates} = feature.geometry

  //create hooks to set lokal state for popup content - fill with first found anime content by default
  const [title, setTitle] = useState(appearances[0]?.title);
  const [animePictureUrl, setAnimePictureUrl] = useState(appearances[0]?.animePictureUrl);
  const [description, setDescription] = useState(appearances[0]?.description);
  const [episode, setEpisode] = useState(appearances[0]?.episode);

  //update state with content of anime with given ID
  function updateState(animeID) {
    const newAnime = appearances.filter( (anime) => anime.id === animeID)[0]
    setTitle(newAnime.title)
    setAnimePictureUrl(newAnime.animePictureUrl)
    setDescription(newAnime.description)
    setEpisode(newAnime.episode)
  }

  //handle onChange for select
  const handler = (event) => {
    const value = event.target.value;
    updateState(value)
  }

  return (
    <>
      <select name="animeSelect" id="animeSelect" onChange={handler}>
            {linkedAnimeCollection.map((anime) => (
                <option value={anime.id} key={anime.id}>{anime.title}</option>
              )
            )};
      </select>

     <div id={`popup-${id}`} className="popUp" >
      <span className="header"><h5>{name}{(city? ", " + city : "")}</h5></span>
      <span className="header">Anime: {title}</span>
      <div className="pictures">
        {/* <img src={animeImg} alt="" />
        <img src={realImg} alt="" /> */}
        {/* animeIMG? animeIMG:"..\noIMG.jpg" */}
      <img id="animeIMG" src={animePictureUrl? animePictureUrl : noIMG} alt={name}/>
      <img id="realIMG" src={realImg? realImg : noIMG} alt={name}/>
        </div>

      <div className="description">
        <span className="header">Episode</span>
          {episode}
          <span className="header">Beschreibung</span>
          {description}
        </div> 
        <span>{coordinates[0]} | {coordinates[1]}</span> 


       
      </div>




    </> 
  )
}

export default Popup
