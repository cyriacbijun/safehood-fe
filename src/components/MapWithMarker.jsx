import React, { useState } from "react";
import { useMapEvents } from 'react-leaflet/hooks'
import { TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const API_URL = ""

const MapWithMarker = ({ setFeedbackText, setIsLoading }) => {
  const [markerPosition, setMarkerPosition] = useState(null);
  
  const map = useMapEvents({
    click: (e) => {
      const latlng = e.latlng;
      setMarkerPosition([latlng.lat,latlng.lng]);
      postLocation(markerPosition);
    },
  });

  const postLocation = async (markerPosition) => {
    setIsLoading(true);
    try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(markerPosition),
        });
    
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFeedbackText(data);
      } catch (error) {
        console.error("Error posting marker data:", error);
        // throw error;
      }
      setIsLoading(false);
  };

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
