import  React, {useState} from 'react';
import Map, {Source, Layer} from 'react-map-gl';

const layerStyle = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-radius': 10,
    'circle-color': '#007cbf'
  }
};

const NewMap = ({places, animeCollection}) => {

  console.log(places)
  const geojson = {
    type: 'FeatureCollection',
    features: places
  };
  const [viewport, setViewport] = React.useState();

  return (
    <Map 
    initialViewState={{
      longitude: 1,
      latitude: 52,
      zoom: 6
    }}
    style={{width: '100%', height: '98vh'}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Source id="my-data" type="geojson" data={geojson}>
        <Layer {...layerStyle} />
      </Source>
    </Map>
  );
}

export default NewMap;