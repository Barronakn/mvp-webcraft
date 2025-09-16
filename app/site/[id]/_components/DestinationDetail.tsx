import parse from "html-react-parser";
import { Doc } from '@/convex/_generated/dataModel';
import "@/app/styles/DestinationDetail.css";

export default function DestinationDetail({ site }: { site: Doc<"sites"> }) {
  return (
    <div className="container">
      {/* Infos principales */}
      <div className="mt-4">
        <h2 className="text-2xl font-bold">{site.name}</h2>
      </div>

      {/* Détails pratiques */}
      <div className="detail-grid">
        <p><span className="font-semibold">Localisation :</span> {site.region || site.city}</p>
        <p><span className="font-semibold">Accès :</span> {site.entry_type === "gratuit" ? "Gratuit" : "Payant"}</p>
        <p><span className="font-semibold">Horaires :</span> {site.opening_hours || "Non spécifié"}</p>
        <p><span className="font-semibold">Tarif :</span> {site.entry_type === "gratuit" ? "Gratuit" : site.price !== null ? `${site.price} FCFA` : "Non spécifié"}</p>
        <p><span className="font-semibold">Thème :</span> {site.category}</p>
        <p><span className="font-semibold">Visiteurs :</span> {site.visitors || site.reviews_count ? `${site.reviews_count} avis` : "Aucun avis"}</p>
        <p><span className="font-semibold">Durée de visite :</span> {site.duration || site.duration_from_cotonou ? `${site.duration_from_cotonou} heures` : "Non spécifiée"}</p>
      </div>

      {/* Description */}
      <div className="mt-8">
        <h3 className="text-x font-bold">Détails du site</h3>
        <p>{site.contentHtml ? parse(site.contentHtml) : site.description || "Aucune description disponible"}</p>
      </div>

      {/* Histoire */}
      {site.story && (
        <div className="mt-8">
<h3 className="text-x font-bold">L&apos;Ascension</h3>
          <p>{parse(site.story)}</p>
        </div>
      )}

      {/* Héritage */}
      {site.heritage && (
        <div className="mt-8">
          <h3 className="text-x font-bold">Un Héritage Vivant Protégé</h3>
          <p>{parse(site.heritage)}</p>
        </div>
      )}

      {/* Tags */}
      <div className="mt-8 flex flex-wrap gap-2">
        {site.tags && site.tags.length > 0 ? (
          site.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))
        ) : (
          <span className="tag">Aucun tag</span>
        )}
      </div>
    </div>
  );
}