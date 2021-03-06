//import react & external tools
import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
//import components
import Popup from "./Popup";
//import helper functions
import {filterAnimeForPlace, filterPlaces, filterAppearancesForPlace} from '../lib/FilterHandler'

//'pk.eyJ1IjoibWFwc3dzMjEyMiIsImEiOiJja3l1ZmZmNDIxbWh1Mm9vM3ZkZXd1eDE2In0.9kz-0YHPkldjju3dKzd5Bg'
mapboxgl.accessToken = 'pk.eyJ1IjoibWFwc3dzMjEyMiIsImEiOiJja3l1ZnBzdTkxbXg1MndwdDhpMGw2cG90In0.skh6k364eLpFbgBIuOjerw';

const Map = ({filter, places, animeCollection}) => {

    const mapContainer = useRef(null);
    const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));
    const [lng, setLng] = useState(13);
    const [lat, setLat] = useState(52);
    const [zoom, setZoom] = useState(3);
    const [filterBuildings, setFilterBuildings] = useState(filter.buildings);
    const [filterNature, setFilterNature] = useState(filter.nature);
    const [filterAnimeID, setFilterAnimeID] = useState(filter.animeID);

    function updateFilter() {
        setFilterBuildings(filter.buildings)
        setFilterNature(filter.nature)
        setFilterAnimeID(filter.animeID)
    }

    //mapbox://styles/mapbox/light-v10
    //mapbox://styles/mapsws2122/cl0sl8ax900dr14qih7q409yh
    //initialize map
    useEffect(() => {
        const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v10',
        center: [lng, lat],
        zoom: zoom
        });

        updateFilter()
        
        console.log( filterNature, filterBuildings, filterAnimeID)

        const filteredPlaces = filterPlaces(places, filterBuildings, filterNature, filterAnimeID)
        
        console.log('filtered:')
        console.log(filteredPlaces)

        // add navigation control (zoom buttons)
        map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
        //on load add a source for features and layer to map
        map.on("load", () => {
            map.resize();
            // new features list
            map.addSource("animePlaces", {
                "type": "geojson",
                "data": {
                  "type": "FeatureCollection",
                  "features": filteredPlaces
                }            
            });
            // add layer and reference to features-list
            map.addLayer({
              id: "animePlacesLayer",
              source: "animePlaces",
              type: "circle",
            //   layout: {
            //     // https://labs.mapbox.com/maki-icons "marker-15"
            //     "icon-image": 'marker-15',
            //     // "icon-padding": 10,
            //     // "icon-allow-overlap": true
            //   },
                paint:{
                    'circle-radius':5,
                    'circle-color':'#0077ff',
                }
            });
            // map.setLayoutPropperty("animePlacesLayer", )
          });


         // ??ndere den Cursor in einen Zeiger, wenn der Benutzer mit der Maus ??ber eine anklickbare Funktion f??hrt
        map.on("mouseenter", "animePlacesLayer", e => {
            if (e.features.length) {
            map.getCanvas().style.cursor = "pointer";
            }
        });
  
        // Setze den Cursor auf die Standardeinstellung zur??ck, wenn sich der Benutzer nicht mehr ??ber einer anklickbaren Funktion befindet
        map.on("mouseleave", "animePlacesLayer", () => {
            map.getCanvas().style.cursor = "";
        });      
        
        // Popup hinzuf??gen, wenn Benutzer auf einen Punkt klickt
        map.on("click", "animePlacesLayer", e => {
            if (e.features.length) {
            const feature = e.features[0];
            // Popup-Knoten erstellen
            const popupNode = document.createElement("div");
            ReactDOM.render(<Popup feature={feature} linkedAnimeCollection={filterAnimeForPlace(animeCollection, feature)} />, popupNode);
            // Popup-Knoten hinzuf??gen
            popUpRef.current
                .setLngLat(feature.geometry.coordinates)
                .setDOMContent(popupNode)
                .addTo(map);
            }
        });
       // Aufr??umen
        return () => map.remove();
    },); // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div>
        <div>
            <h1>{filterBuildings}</h1>
            <h1>{filterBuildings}</h1>
            <h1>{filterBuildings}</h1>
        </div>
        <div ref={mapContainer} className="map-container" />
        </div>
        );
}

export default Map;