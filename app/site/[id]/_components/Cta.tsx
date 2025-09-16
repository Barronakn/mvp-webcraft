"use client";

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Doc } from '@/convex/_generated/dataModel';

export default function Cta({ site }: { site: Doc<"sites"> }) {
  const router = useRouter();

  return (
    <div className="flex justify-center mt-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row w-full max-w-7xl border-2 border-gray-200 rounded-2xl overflow-hidden">
        {/* Partie texte */}
        <div className="flex flex-col justify-center gap-2 p-4 md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-bold text-shadow-orange-500">{site.name}</h3>
          <p className="text-base md:text-lg">{site.description || "Aucune description disponible"}</p>
        </div>

        {/* Partie bouton */}
        <div className="flex justify-center md:justify-end items-center p-4 md:w-1/2">
          <Button
            onClick={() => router.push('/itineraire')}
            className="flex justify-center items-center gap-2 px-4 py-2 bg-orange-500 text-white font-medium rounded-full hover:bg-blue-700 transition w-1/2 md:w-auto"
          >
            Visiter ce site
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>

      </div>
    </div>
  );
}
