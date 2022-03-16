import React from 'react'
import "../Popup.css";

const Popup = ({ feature }) => {
  const { id, placeName, animeTitle, animeIMG, realIMG, description, city, noIMG } = feature.properties
  const {coordinates} = feature.geometry


  return (
    <div id={`popup-${id}`} className="popUp" >
      <span className="header"><h5>{placeName}{(city? ", " + city : "")}</h5></span>
      <span className="header">Anime: {animeTitle}</span>
      <div className="pictures">
        {/* <img src={animeImg} alt="" />
        <img src={realImg} alt="" /> 
        <img id="animeIMG" src={animeIMG} onerror="this.src='https://i.pinimg.com/736x/9c/bb/09/9cbb09a97b37e57cf337d38be9064e6d--manga-girl-manga-anime.jpg';"/>
        <img id="realIMG" src={realIMG} onerror="this.src='https://i.pinimg.com/736x/9c/bb/09/9cbb09a97b37e57cf337d38be9064e6d--manga-girl-manga-anime.jpg';"/>
        */}

      <img src={animeIMG}  />  
      <img src={realIMG}  />  


       
      </div>


     {/*<span>Stadt: {feature.properties.city} </span> 
        <span>Land: {feature.properties.country}</span> 
        <span className="header">Koordinaten</span>
        <span>{coordinates[0]} | {coordinates[1]}</span>
        <span className="header">Beschreibung</span> */}
      <div className="description">
        {description}
      </div>
    </div>
  )
}

export default Popup
