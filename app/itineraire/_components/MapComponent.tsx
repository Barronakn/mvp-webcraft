"use client";

import { MapContainer, TileLayer, Marker, Polyline, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Icônes Leaflet
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Icône artisan personnalisée (HTML + Tailwind)
const artisanMarkerIcon = new L.DivIcon({
  className: "custom-marker",
  html: `
    <div class="flex items-center justify-center">
      <div class="w-6 h-6 bg-red-600 border-2 border-white rounded-full shadow-md animate-pulse"></div>
    </div>
  `,
  iconSize: [30, 30],
  iconAnchor: [15, 15],
  popupAnchor: [0, -15],
});

interface MapComponentProps {
  userPos: [number, number] | null;
  selectedSite: { 
    coordinates: { 
      latitude: number; 
      longitude: number; 
    };
    name: string;
  } | null;
  route: [number, number][];
  artisanShops: Array<{
    latitude: number;
    longitude: number;
    name: string;
    img?: string;
  }>;
}

export default function MapComponent({ 
  userPos, 
  selectedSite, 
  route, 
  artisanShops 
}: MapComponentProps) {
  return (
    <MapContainer 
      center={userPos || [6.37, 2.39]} 
      zoom={12} 
      style={{ height: "100%", width: "100%" }}
      key={JSON.stringify(userPos)} // Force re-render when userPos changes
    >
      <TileLayer 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        attribution="© OpenStreetMap" 
      />

      {userPos && (
        <Marker position={userPos} icon={markerIcon}>
          <Popup>Votre position</Popup>
        </Marker>
      )}

      {selectedSite && (
        <Marker 
          position={[selectedSite.coordinates.latitude, selectedSite.coordinates.longitude]} 
          icon={markerIcon}
        >
          <Popup>{selectedSite.name}</Popup>
        </Marker>
      )}

      {route.length > 1 && <Polyline positions={route} color="blue" />}

      {artisanShops.map((shop, idx) => (
        <Marker 
          key={idx} 
          position={[shop.latitude, shop.longitude]} 
          icon={artisanMarkerIcon}
        >
          <Popup>
            <div className="flex flex-col items-center">
              <strong>{shop.name}</strong>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}