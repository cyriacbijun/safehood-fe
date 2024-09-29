import React, { useState } from "react";
import MapWithMarker from "./components/MapWithMarker";
import { MapContainer } from "react-leaflet";
import "./App.css";

const App = () => {
  return (
    <div id="main-container">

<div class="titlebar">
      <h1>SAFEHOOD</h1>
      <p id="tagline">
        Check your neighbourhood safety the right way
      </p>
  </div>

  <div id="main-container" class="body-container">
      <p id="description">
      Your go-to app for neighborhood safety insights. 
      Explore any area by selecting a location on the map and instantly get safety ratings based on crime statistics and other local data. 
      Make informed decisions about where you live, work, or visit with ease and confidence.
      </p>
      <MapContainer
        id="map-container"
        center={[33.4484, -112.0740]}
        zoom={14}
        scrollWheelZoom={true}
      >
        <MapWithMarker />
      </MapContainer >
      </div>
    </div>
  );
};

export default App;
