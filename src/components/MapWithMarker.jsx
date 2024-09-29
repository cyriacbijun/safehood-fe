import React, { useState } from "react";
import { useMapEvents } from 'react-leaflet/hooks'
import { TileLayer, Marker, LayerGroup, Circle } from "react-leaflet";
import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const radius = 500;
const API_URL = "api/coordinates_to_zipcode";

const MapWithMarker = ({ setFeedback, setIsLoading }) => {
  const [markerPosition, setMarkerPosition] = useState(null);

  const map = useMapEvents({
    click: (e) => {
      const latlng = e.latlng;
      setMarkerPosition([latlng.lat, latlng.lng]);
      const payload = {
        lat: latlng.lat.toString(),
        lon: latlng.lng.toString(),
      };
      postLocation(payload);
    },
  });

  const postLocation = async (markerPositionPayload) => {
    setIsLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(markerPositionPayload),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setFeedback(data);
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
      {markerPosition && (
        <LayerGroup>
          <Circle
            center={markerPosition}
            pathOptions={{ fillColor: 'blue' }}
            radius={radius}
          />
        </LayerGroup>

      )}
    </>
  );
};

export default MapWithMarker;
