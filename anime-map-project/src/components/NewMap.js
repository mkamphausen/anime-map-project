import  React, {useState} from 'react';
import Map, { Popup, Marker, Source, Layer} from 'react-map-gl';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

//'pk.eyJ1IjoibWFwc3dzMjEyMiIsImEiOiJja3l1ZmZmNDIxbWh1Mm9vM3ZkZXd1eDE2In0.9kz-0YHPkldjju3dKzd5Bg'
mapboxgl.accessToken = 'pk.eyJ1IjoibWFwc3dzMjEyMiIsImEiOiJja3l1ZnBzdTkxbXg1MndwdDhpMGw2cG90In0.skh6k364eLpFbgBIuOjerw';

const layerStyle = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-radius': 10,
    'circle-color': '#007cbf'
  }
};

//<Popup feature={feature} linkedAnimeCollection={filterAnimeForPlace(animeCollection, feature)} />

const NewMap = ({places, animeCollection}) => {

  console.log(places)
  const geojson = {
    type: 'FeatureCollection',
    features: places
  };
  const [viewport, setViewport] = React.useState();
  const [showPopup, setShowPopup] = React.useState(true);

  return (
    <Map 
    initialViewState={{
      longitude: 1,
      latitude: 51,
      zoom: 3
    }}
    style={{width: '100%', height: '98vh'}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
    mapboxApiAccessToken='pk.eyJ1IjoibWFwc3dzMjEyMiIsImEiOiJja3l1ZnBzdTkxbXg1MndwdDhpMGw2cG90In0.skh6k364eLpFbgBIuOjerw'
    >
      <Source id="my-data" type="geojson" data={geojson}>
        <Layer {...layerStyle} />
      </Source>
      {/* {places.map(place =>(
        <Marker key={place.properties.placeID} latitude={place.geometrie.coordinates[0]} longitude={place.geometrie.coordinates[1]}>
          <div>Test</div>
        </Marker>
      ))} */}
    </Map>
  );
}

export default NewMap;