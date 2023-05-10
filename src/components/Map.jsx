import React from "react";
import classes from "./Map.module.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import IconLocation from "../assets/icon-location.svg";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const iconLocation = new Icon({
  iconUrl: IconLocation,
  iconSize: [46, 56],
});

const SetView = ({ coords }) => {
  const map = useMap();
  map.setView(coords);
  return null;
};

const Map = ({ coords }) => {
  return (
    <MapContainer center={coords} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <SetView coords={coords} />
      <Marker position={coords} icon={iconLocation} />
    </MapContainer>
  );
};

export default Map;
