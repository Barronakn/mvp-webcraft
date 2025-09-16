"use client";

import MapView from "@/app/site/[id]/_components/MapView";
import DestinationDetail from "@/app/site/[id]/_components/DestinationDetail";
import { Doc } from '@/convex/_generated/dataModel';
import parse from "html-react-parser";

export default function Carte({ site }: { site: Doc<"sites"> }) {
  return (
    <div className="flex justify-center mt-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl border-2 border-gray-200 rounded-2xl p-4 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
        
        {/* Partie gauche : Détails de la destination */}
        <div className="w-full h-full">
          <DestinationDetail site={site} />
        </div>

        {/* Partie droite : Carte et infos supplémentaires */}
        <div className="w-full h-auto flex flex-col">
          
          {/* Vue sur plan */}
          <div className="w-full h-auto mt-4">
            <p className="text-2xl font-bold mb-2">Vue sur plan</p>
            <MapView site={site} />
          </div>

          {/* Informations supplémentaires */}
          <div className="mt-6 md:mt-10 w-full">
            <div className="text-2xl font-bold mb-2">Informations supplémentaires</div>
            <div className="text-base mb-4">
              Découvrez plus de détails sur ce site, ses caractéristiques et son importance culturelle.
            </div>

            {site.contentHtml && (
              <div className="prose mb-4">
                {parse(site.contentHtml)}
              </div>
            )}

            {site.tags && site.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {site.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-terracotta-50 text-terracotta-500 px-2 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
