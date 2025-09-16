"use client";

import MobileNavbar from '@/app/(home)/_components/header/MobileNavbar';
import Navbar from '@/app/(home)/_components/header/Navbar';
import Image from 'next/image';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';

export default function Hero({ id }: { id: Id<"sites"> }) {
  const destination = useQuery(api.sites.getById, { id });

  if (destination === undefined) {
    return <div className="flex flex-col justify-center items-center min-h-[20vh]">Chargement...</div>;
  }
  if (destination === null) {
    return <div className="flex flex-col justify-center items-center min-h-[20vh]">Aucune destination trouvée</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center w-full px-4 sm:px-6 lg:px-8">
      <Navbar />
      <MobileNavbar />

      {/* Spacer / Séparation du header */}
      <div className="w-full h-24 sm:h-32 md:h-40 lg:h-48"></div>

      {/* Hero image */}
      <div className="w-full max-w-7xl h-64 sm:h-80 md:h-96 lg:h-[30rem] bg-blue-50 rounded-2xl overflow-hidden">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <Image
            src={destination.photos[0] || "/placeholder.jpg"}
            alt={destination.name}
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </div>
  );
}
