import React, { useState } from "react";
import { useMapEvents } from 'react-leaflet/hooks'
import { TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

// Create a custom icon for the marker
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const MapWithMarker = () => {
  const [markerPosition, setMarkerPosition] = useState(null);

  const map = useMapEvents({
    click: (e) => {
      const latlng = e.latlng;
      setMarkerPosition([latlng.lat,latlng.lng]);
    },
  })

  return (
        <>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markerPosition && (
        <Marker position={markerPosition} icon={markerIcon}>
        </Marker>
      )}
    </>
  );
};

export default MapWithMarker;
