"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Doc } from '@/convex/_generated/dataModel';

const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MapView({ site }: { site: Doc<"sites"> }) {
  return (
    <MapContainer
      center={[site.coordinates.latitude, site.coordinates.longitude]}
      zoom={13}
      scrollWheelZoom={false}
      className="w-full h-[25rem] rounded-2xl"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={[site.coordinates.latitude, site.coordinates.longitude]} icon={icon}>
        <Popup>{site.name} 📍</Popup>
      </Marker>
    </MapContainer>
  );
}