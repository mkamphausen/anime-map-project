import React from 'react'

const Popup = ({ feature }) => {
  const { id, placeName, animeTitle, animeImg, realImg, description, city } = feature.properties

  return (
    <div id={`popup-${id}`} >
      <span>Ort</span>
      <span>{placeName}{(city? ", " + city : "")}</span>
      <span>Anime</span>
      <span>{animeTitle}</span>
      <div className="pictures">
        {/* <img src={animeImg} alt="" />
        <img src={realImg} alt="" /> */}
      </div>
      <div className="description">
        {description}
      </div>
    </div>
  )
}

export default Popup
