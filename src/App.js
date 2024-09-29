import React, { useState } from "react";
import MapWithMarker from "./components/MapWithMarker";
import Loader from "./components/loader";
import { MapContainer } from "react-leaflet";
import "./App.css";

const App = () => {
  const [neighbourhoodFeedback, setFeedbackText] = useState(""); 
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <h1>Safehood - Check your neighbourhood safety the right way</h1>
      <MapContainer
        center={[33.4484, -112.0740]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "600px", width: "80%" }}
      >
        <MapWithMarker setFeedbackText={setFeedbackText} setIsLoading={setIsLoading}/>
      </MapContainer >
      {isLoading ? <Loader /> : <p>{neighbourhoodFeedback}</p>}
    </div>
  );
};

export default App;
