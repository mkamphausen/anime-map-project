import React from 'react'
import "../Popup.css";

const Popup = ({ feature }) => {
  const { id, placeName, animeTitle, animeImg, realImg, description, city } = feature.properties
  const {coordinates} = feature.geometry


  return (
    <div id={`popup-${id}`} className="popUp" >
      <span className="header">Ort</span>
      <span>{placeName}{(city? ", " + city : "")}</span>
      <span className="header">Anime</span>
      <span>{animeTitle}</span>
      <div className="pictures">
        {/* <img src={animeImg} alt="" />
        <img src={realImg} alt="" /> */}
      </div>
      <span className="header">Koordinaten</span>
      <span>{coordinates[0]} | {coordinates[1]}</span>
      <span className="header">Beschreibung</span>
      <div className="description">
        {description}
      </div>
    </div>
  )
}

export default Popup
