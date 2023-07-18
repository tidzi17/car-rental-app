import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { icon as LeafletIcon } from 'leaflet';
import locationsData from './data.json';
import markerIcon from "../assets/locationpin.png";
import './styles.css';

const Map = () => {
  const customIcon = LeafletIcon({
    iconUrl: markerIcon,
    iconSize: [32, 32], 
    iconAnchor: [16, 32]
  });
  


  return (
    <div className="map-containerr">
      {/* <h1>Our Locations</h1> */}
      <MapContainer className="map-container" center={[40.7128, -74.0060]} zoom={5} /* style={{ height: '400px' }} */>
        <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" attribution="Map data &copy; OpenStreetMap contributors" />
        {locationsData.map((location, index) => (
          <Marker position={[location.lat, location.lng]} key={index} icon={customIcon}>
            <Popup>{location.address}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;








