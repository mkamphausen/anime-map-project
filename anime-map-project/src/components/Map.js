import ReactDOM from "react-dom";
import React, { useRef, useEffect } from "react";
// import mapboxgl from "mapbox-gl";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import fetchFakeData from "../api/fetchFakeData";
import Popup from "./Popup";
import "../Map.css";

// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
mapboxgl.accessToken = 'pk.eyJ1IjoibWFwc3dzMjEyMiIsImEiOiJja3l1ZmZmNDIxbWh1Mm9vM3ZkZXd1eDE2In0.9kz-0YHPkldjju3dKzd5Bg';

const Map = () => {
  const mapContainerRef = useRef(null);
  const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));

  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: "mapbox://styles/mapbox/streets-v11",
      center: [7.2, 50.3],
      zoom: 11.5
    });

    // add navigation control (zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    map.on("load", () => {
      // Füge die Datenquelle für eine neue Feature-Sammlung ohne Features hinzu
      map.addSource("random-points-data", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: []
        }
      });
      // Füge nun die Ebene hinzu und verweise auf die oben genannte Datenquelle mit Namen
      map.addLayer({
        id: "random-points-layer",
        source: "random-points-data",
        type: "symbol",
        layout: {
          // https://labs.mapbox.com/maki-icons
          "icon-image": "marker-15",
          "icon-padding": 1,
          "icon-allow-overlap": true
        }
      });
    });

    map.on("moveend", async () => {
      // neue Mittenkoordinaten erhalten
      const { lng, lat } = map.getCenter();
      // neue Daten abrufen
      const results = await fetchFakeData({ longitude: lng, latitude: lat });
      // Aktualisiere die Quelle "Random-Points-Data" mit neuen Daten
      // Alle Ebenen, die die Datenquelle "Random-Points-Data" verwenden,
      // werden automatisch aktualisiert
      map.getSource("random-points-data").setData(results);
    });

    // Ändere den Cursor in einen Zeiger, wenn der Benutzer mit der Maus über eine anklickbare Funktion fährt
    map.on("mouseenter", "random-points-layer", e => {
      if (e.features.length) {
        map.getCanvas().style.cursor = "pointer";
      }
    });

    // Setze den Cursor auf die Standardeinstellung zurück, wenn sich der Benutzer nicht mehr über einer anklickbaren Funktion befindet
    map.on("mouseleave", "random-points-layer", () => {
      map.getCanvas().style.cursor = "";
    });

    // Popup hinzufügen, wenn Benutzer auf einen Punkt klickt
    map.on("click", "random-points-layer", e => {
      if (e.features.length) {
        const feature = e.features[0];
        // Popup-Knoten erstellen
        const popupNode = document.createElement("div");
        ReactDOM.render(<Popup feature={feature} />, popupNode);
        // Popup-Knoten hinzufügen
        popUpRef.current
          .setLngLat(feature.geometry.coordinates)
          .setDOMContent(popupNode)
          .addTo(map);
      }
    });

    // Aufräumen
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
    <div className="map-container" ref={mapContainerRef} />
    </>
  );
};

export default Map;
