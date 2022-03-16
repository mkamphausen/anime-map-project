import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from "react-dom";

import Popup from "./Popup";

import {filterAnimeForPlace, filterAppearancesForPlace} from '../lib/FilterHandler'


import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

//'pk.eyJ1IjoibWFwc3dzMjEyMiIsImEiOiJja3l1ZmZmNDIxbWh1Mm9vM3ZkZXd1eDE2In0.9kz-0YHPkldjju3dKzd5Bg'
mapboxgl.accessToken = 'pk.eyJ1IjoibWFwc3dzMjEyMiIsImEiOiJja3l1ZnBzdTkxbXg1MndwdDhpMGw2cG90In0.skh6k364eLpFbgBIuOjerw';

const NewMap = ({places, animeCollection}) => {

    // console.log(places);

    const mapContainer = useRef(null);
    const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));
    const [lng, setLng] = useState(13);
    const [lat, setLat] = useState(52);
    const [zoom, setZoom] = useState(4);

    const externalTestData =[
        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-76.5, 37.5]
                            },
                            "properties": {
                                "title": "Mapbox DC",
                                "marker-symbol": "monument"
                            }
                        }, 
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-76, 37.5]
                            },
                            "properties": {
                                "title": "Mapbox DC",
                                "marker-symbol": "monument"
                            }
                        } ,
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-77, 37.5]
                            },
                            "properties": {
                                "title": "Mapbox DC",
                                "marker-symbol": "monument"
                            }
                        }   
    ]

    //initialize map
    useEffect(() => {
        const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapsws2122/cl0sl8ax900dr14qih7q409yh',
        center: [lng, lat],
        zoom: zoom
        });
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
                  "features": places
                }            
            });

            // add layer and reference to features-list
            map.addLayer({
              id: "animePlacesLayer",
              source: "animePlaces",
              type: "symbol",
              layout: {
                // https://labs.mapbox.com/maki-icons
                "icon-image": "marker-15",
                "icon-padding": 1,
                "icon-allow-overlap": true
              }
            });
            // map.setLayoutPropperty("animePlacesLayer", )
          });


         // Ändere den Cursor in einen Zeiger, wenn der Benutzer mit der Maus über eine anklickbare Funktion fährt
        map.on("mouseenter", "animePlacesLayer", e => {
            if (e.features.length) {
            map.getCanvas().style.cursor = "pointer";
            }
        });
  
        // Setze den Cursor auf die Standardeinstellung zurück, wenn sich der Benutzer nicht mehr über einer anklickbaren Funktion befindet
        map.on("mouseleave", "animePlacesLayer", () => {
            map.getCanvas().style.cursor = "";
        });      
        
        // Popup hinzufügen, wenn Benutzer auf einen Punkt klickt
        map.on("click", "animePlacesLayer", e => {
            if (e.features.length) {
            const feature = e.features[0];
            // Popup-Knoten erstellen
            const popupNode = document.createElement("div");
            ReactDOM.render(<Popup feature={feature} linkedAnimeCollection={filterAnimeForPlace(animeCollection, feature)} />, popupNode);
            // Popup-Knoten hinzufügen
            popUpRef.current
                .setLngLat(feature.geometry.coordinates)
                .setDOMContent(popupNode)
                .addTo(map);
            }
        });
        // //   DEBUG
        //   console.log(animeCollection)
        //   console.log("______")

       
       // Aufräumen
        return () => map.remove();

    },); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
        <div ref={mapContainer} className="map-container" />
        </div>
        );

}

export default NewMap;