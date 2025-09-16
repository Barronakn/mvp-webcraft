"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Polyline, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { usePaginatedQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

import Footer from "../components/layout/Footer";
import Navbar from "../(home)/_components/header/Navbar";
import Image from "next/image";

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

const ORS_API_KEY =
  "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjNkMDFlYzQ3ZmFlNTQ4YzViYmZiZTVjYWQwMTEzNDRkIiwiaCI6Im11cm11cjY0In0=";

const RADIUS_KM = 5;

// Types
type OverpassElement = {
  type: "node" | "way" | "relation";
  lat?: number;
  lon?: number;
  center?: { lat: number; lon: number };
  tags?: { [key: string]: string };
};

type ArtisanShop = { latitude: number; longitude: number; name: string; img?: string };

type Destination = { _id: string; name: string; coordinates: { latitude: number; longitude: number } };

// Récupération boutiques artisanales
async function fetchArtisanShops(lat: number, lng: number, radiusKm: number): Promise<ArtisanShop[]> {
  const radiusMeters = radiusKm * 1000;
  const query = `
    [out:json][timeout:25];
    (
      node["shop"="craft"](around:${radiusMeters},${lat},${lng});
      way["shop"="craft"](around:${radiusMeters},${lat},${lng});
      relation["shop"="craft"](around:${radiusMeters},${lat},${lng});
    );
    out center;
  `;
  const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;
  const res = await fetch(url);
  const data: { elements: OverpassElement[] } = await res.json();

  return data.elements.map((el) => {
    const coords = el.type === "node" ? [el.lat!, el.lon!] : [el.center!.lat, el.center!.lon];
    return {
      latitude: coords[0],
      longitude: coords[1],
      name: el.tags?.name || "Boutique artisanale",
      img: el.tags?.image || "/fallback.png", // fallback image si aucune image
    };
  });
}

export default function ItinerairePage() {
  const [userPos, setUserPos] = useState<[number, number] | null>(null);
  const [selectedSite, setSelectedSite] = useState<Destination | null>(null);
  const [route, setRoute] = useState<[number, number][]>([]);
  const [distance, setDistance] = useState<number | null>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const [artisanShops, setArtisanShops] = useState<ArtisanShop[]>([]);

  // Position utilisateur
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setUserPos([pos.coords.latitude, pos.coords.longitude]);
      });
    }
  }, []);

  // Liste destinations depuis Convex
  const { results: destinations, status } = usePaginatedQuery(api.queries.sites.listSites, {}, { initialNumItems: 20 });

  // Récupération boutiques artisanales dès que destination change
  useEffect(() => {
    if (!selectedSite) return;
    fetchArtisanShops(selectedSite.coordinates.latitude, selectedSite.coordinates.longitude, RADIUS_KM)
      .then(setArtisanShops)
      .catch(console.error);
  }, [selectedSite]);

  // Générer itinéraire
  const fetchRoute = async () => {
    if (!userPos || !selectedSite) return;

    const coordsList: [number, number][] = [
      userPos,
      [selectedSite.coordinates.latitude, selectedSite.coordinates.longitude],
    ];

    try {
      const res = await fetch(`https://api.openrouteservice.org/v2/directions/driving-car/geojson`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: ORS_API_KEY },
        body: JSON.stringify({ coordinates: coordsList.map(([lat, lng]) => [lng, lat]) }),
      });
      const data = await res.json();

      if (!data.features || data.features.length === 0) {
        console.error("Aucun itinéraire trouvé !");
        setRoute([]);
        setDistance(null);
        setDuration(null);
        return;
      }

      const coords: [number, number][] = data.features[0].geometry.coordinates.map(
        ([lng, lat]: [number, number]) => [lat, lng]
      );
      setRoute(coords);
      setDistance(data.features[0].properties.summary.distance);
      setDuration(data.features[0].properties.summary.duration);
    } catch (err) {
      console.error("Erreur API ORS :", err);
      setRoute([]);
      setDistance(null);
      setDuration(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-col md:flex-row flex-1 pt-44 px-6 md:px-20">
        <div className="md:w-1/3 p-6 bg-gray-50 space-y-6">
          <div>
            <h2 className="text-lg font-bold mb-2">Point de départ</h2>
            <div className="p-3 bg-white rounded shadow">
              {userPos ? `${userPos[0].toFixed(5)}, ${userPos[1].toFixed(5)}` : "Chargement de votre position..."}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">Destination</h2>
            {status === "LoadingFirstPage" ? (
              <p>Chargement des destinations...</p>
            ) : (
              <select
                className="mt-1 block w-full border rounded p-2"
                value={selectedSite?._id || ""}
                onChange={(e) => {
                  const dest = destinations.find((d: Destination) => d._id === e.target.value);
                  if (dest) setSelectedSite(dest);
                }}
              >
                <option value="">-- Choisir une destination --</option>
                {destinations.map((d: Destination) => (
                  <option key={d._id} value={d._id}>
                    {d.name}
                  </option>
                ))}
              </select>
            )}
          </div>

          <button
            className="mt-4 px-4 py-2 bg-green-800 text-white cursor-pointer rounded shadow hover:opacity-80"
            onClick={fetchRoute}
          >
            Générer l’itinéraire
          </button>

          {distance && duration && (
            <div className="mt-4 p-3 bg-white rounded shadow space-y-2">
              <p>
                <strong>Distance totale:</strong> {(distance / 1000).toFixed(2)} km
              </p>
              <p>
                <strong>Durée estimée:</strong> {Math.floor(duration / 3600)}h {Math.floor((duration % 3600) / 60)}min
              </p>
            </div>
          )}
        </div>

        <div className="md:w-2/3 h-[60vh] md:h-auto z-10">
          <MapContainer center={userPos || [6.37, 2.39]} zoom={12} style={{ height: "100%", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="© OpenStreetMap" />

            {userPos && (
              <Marker position={userPos} icon={markerIcon}>
                <Popup>Votre position</Popup>
              </Marker>
            )}

            {selectedSite && (
              <Marker position={[selectedSite.coordinates.latitude, selectedSite.coordinates.longitude]} icon={markerIcon}>
                <Popup>{selectedSite.name}</Popup>
              </Marker>
            )}

            {route.length > 1 && <Polyline positions={route} color="blue" />}

            {artisanShops.map((shop, idx) => (
              <Marker key={idx} position={[shop.latitude, shop.longitude]} icon={artisanMarkerIcon}>
                <Popup>
                  <div className="flex flex-col items-center">
                    <strong>{shop.name}</strong>
                    {/* <Image
                      src={shop.img!}
                      alt={shop.name}
                      width={100}
                      height={100}
                      className="w-24 h-24 object-cover mt-2 rounded"
                    /> */}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      <Footer />
    </div>
  );
}
