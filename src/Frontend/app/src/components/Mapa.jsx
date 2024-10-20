import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapaFecap() {
  // Coordenadas da FECAP Liberdade
  const fecapPosition = [-23.55710176216077, -46.63698340544944];

  return (
    <MapContainer 
      center={fecapPosition} 
      zoom={15} 
      style={{ height: "420px", width: "490px" }}
      scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Marcador no local da FECAP */}
      <Marker position={fecapPosition}>
        <Popup>
          FECAP Liberdade <br /> São Paulo - SP.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapaFecap;
