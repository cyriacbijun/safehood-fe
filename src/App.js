import React, { useState } from "react";
import MapWithMarker from "./components/MapWithMarker";
import Loader from "./components/Loader";
import { MapContainer } from "react-leaflet";
import { FeedBack } from "./models/FeedBack";
import { FeedbackContainer } from "./components/FeedbackContainer";
import "./App.css";

const App = () => {
  const [neighbourhoodFeedback, setFeedback] = useState(new FeedBack("", "", 0));
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div id="main-container">

      <h1>SAFEHOOD</h1>
      <p id="tagline">
        Check your neighbourhood safety the right way
      </p>

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
        <MapWithMarker setFeedback={setFeedback} setIsLoading={setIsLoading} />
      </MapContainer >
      {isLoading ? <Loader /> : <FeedbackContainer feedBack={neighbourhoodFeedback} />}
    </div>
  );
};

export default App;
