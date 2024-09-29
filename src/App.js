import React, { useState } from "react";
import MapWithMarker from "./components/MapWithMarker";
import Loader from "./components/loader";
import { MapContainer } from "react-leaflet";
import { FeedBack } from "./models/FeedBack";
import "./App.css";

const App = () => {
  const [neighbourhoodFeedback, setFeedback] = useState(new FeedBack("","",0)); 
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div id="main-container">
      <div id="sub-container">
      <h1>Safehood - Check your neighbourhood safety the right way</h1>
      <MapContainer
      id="map-container"
        center={[33.4484, -112.0740]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <MapWithMarker setFeedback={setFeedback} setIsLoading={setIsLoading}/>
      </MapContainer >
      {isLoading ? <Loader /> : <p>{neighbourhoodFeedback.reasoning}</p>}
      </div>
      
    </div>
  );
};

export default App;
