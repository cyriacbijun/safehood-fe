import React from "react";
import MapWithMarker from "./MapWithMarker"; // Import the new component
import { MapContainer } from "react-leaflet";

const App = () => {
  return (
    <div>
      <h1>Safehood - Check your neighbourhood safety the right way</h1>
      <MapContainer
        center={[33.4484, -112.0740]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "600px", width: "80%" }}
      >
        <MapWithMarker />
      </MapContainer>

    </div>
  );
};

export default App;
