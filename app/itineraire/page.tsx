"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Polyline, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { usePaginatedQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

import Footer from "../components/layout/Footer";
import MobileNavbar from "../(home)/_components/header/MobileNavbar";
import Navbar from "../(home)/_components/header/Navbar";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const ORS_API_KEY = "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjNkMDFlYzQ3ZmFlNTQ4YzViYmZiZTVjYWQwMTEzNDRkIiwiaCI6Im11cm11cjY0In0=";

export default function ItinerairePage() {
  const [userPos, setUserPos] = useState<[number, number] | null>(null);
  const [selectedSite, setSelectedSite] = useState<{ latitude: number; longitude: number; name: string } | null>(null);
  const [route, setRoute] = useState<[number, number][]>([]);
  const [distance, setDistance] = useState<number | null>(null);
  const [duration, setDuration] = useState<number | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setUserPos([pos.coords.latitude, pos.coords.longitude]);
      });
    }
  }, []);

  const { results, status } = usePaginatedQuery(api.queries.sites.listSites, {}, { initialNumItems: 20 });

  const fetchRoute = async () => {
    if (!userPos || !selectedSite) return;

    const coordsList: [number, number][] = [
      userPos,
      [selectedSite.latitude, selectedSite.longitude],
    ];

    try {
      const res = await fetch(
        `https://api.openrouteservice.org/v2/directions/driving-car/geojson`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: ORS_API_KEY,
          },
          body: JSON.stringify({
            coordinates: coordsList.map(([lat, lng]) => [lng, lat]), // [lon, lat]
          }),
        }
      );

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
              {userPos
                ? `${userPos[0].toFixed(5)}, ${userPos[1].toFixed(5)}`
                : "Chargement de votre position..."}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">Destination</h2>
            {status === "LoadingFirstPage" ? (
              <p>Chargement des sites...</p>
            ) : (
              <select
                value={selectedSite ? `${selectedSite.latitude},${selectedSite.longitude}` : ""}
                onChange={(e) => {
                  const [lat, lng] = e.target.value.split(",").map(Number);
                  const site = results.find(
                    (s) => s.coordinates.latitude === lat && s.coordinates.longitude === lng
                  );
                  if (site) setSelectedSite({ latitude: lat, longitude: lng, name: site.name });
                }}
                className="mt-1 block w-full border rounded p-2"
              >
                <option value="">-- Choisir un site --</option>
                {results.map((s) => (
                  <option
                    key={s._id.toString()}
                    value={`${s.coordinates.latitude},${s.coordinates.longitude}`}
                  >
                    {s.name}
                  </option>
                ))}
              </select>
            )}
          </div>

          <button
            className="mt-4 px-4 py-2 bg-green-800 text-white rounded shadow hover:opacity-80"
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
                <strong>Durée estimée:</strong> {Math.floor(duration / 3600)}h{" "}
                {Math.floor((duration % 3600) / 60)}min
              </p>
            </div>
          )}
        </div>

        <div className="md:w-2/3 h-[60vh] md:h-auto z-10">
          <MapContainer
            center={userPos || [6.37, 2.39]}
            zoom={8}
            style={{ height: "100%", width: "100%" }}
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
              <Marker position={[selectedSite.latitude, selectedSite.longitude]} icon={markerIcon}>
                <Popup>{selectedSite.name}</Popup>
              </Marker>
            )}

            {route.length > 1 && <Polyline positions={route} color="blue" />}
          </MapContainer>
        </div>
      </div>

      <Footer />
    </div>
  );
}
