import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import markerShadowPng from 'leaflet/dist/images/marker-shadow.png';

// Corrige o ícone do marcador
const customIcon = new L.Icon({
  iconUrl: markerIconPng,
  iconSize: [25, 41], // Tamanho do ícone
  iconAnchor: [12, 41], // Posição do "ponto" do marcador
  popupAnchor: [1, -34], // Posição do popup em relação ao marcador
  shadowUrl: markerShadowPng,
  shadowSize: [41, 41], // Tamanho da sombra
});

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
      <Marker position={fecapPosition} icon={customIcon}>
        <Popup>
          FECAP Liberdade <br /> São Paulo - SP.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapaFecap;
