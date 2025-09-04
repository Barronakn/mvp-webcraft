"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

export default function MapView() {
    return (
        <MapContainer
            center={[6.3703, 2.3912]} // Cotonou par défaut
            zoom={13}
            scrollWheelZoom={false}
            className="w-full h-[25rem] rounded-2xl"
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            <Marker position={[6.3703, 2.3912]} icon={icon}>
                <Popup>Cotonou 📍</Popup>
            </Marker>
        </MapContainer>
    );
}
