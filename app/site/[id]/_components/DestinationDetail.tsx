import Image from "next/image";
import parse from "html-react-parser";
import { destinations } from "@/app/utils/data/mockData";
import "@/app/styles/DestinationDetail.css"; // Importation directe du CSS

export default function DestinationDetail({ id }: { id: number }) {
  const destination = destinations.find((d) => d.id === id);
  if (!destination) return <div className="text-center text-gray-600">Aucune destination trouvée</div>;

  return (
    <div className="container">
      {/* Infos principales */}
      <div className="mt-4">
        <h2 className="text-2xl font-bold">{destination.title}</h2>
      </div>

      {/* Détails pratiques */}
      <div className="detail-grid">
        <p><span className="font-semibold">Localisation :</span> {destination.location}</p>
        <p><span className="font-semibold">Accès :</span> {destination.access}</p>
        <p><span className="font-semibold">Horaires :</span> {destination.hours}</p>
        <p><span className="font-semibold">Tarif :</span> {destination.price}</p>
        <p><span className="font-semibold">Thème :</span> {destination.theme}</p>
        <p><span className="font-semibold">Visiteurs :</span> {destination.visitors}</p>
      </div>

      {/* Description */}
      <div className="mt-8">
        <h3 className="text-x font-bold">Détails du site</h3>
        <p>{parse(destination.content)}</p>
      </div>

      {/* Histoire */}
      <div className="mt-8">
        <h3 className="text-x font-bold">L'Ascension</h3>
        <p>{parse(destination.story)}</p>
      </div>

      {/* Héritage */}
      <div className="mt-8">
        <h3 className="text-x font-bold">Un Héritage Vivant Protégé</h3>
        <p>{parse(destination.heritage)}</p>
      </div>

      {/* Tags */}
      <div className="mt-8 flex flex-wrap gap-2">
        {destination.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}