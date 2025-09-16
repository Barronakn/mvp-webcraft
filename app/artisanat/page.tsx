'use client';

import { useState } from "react";
import Navbar from "@/app/(home)/_components/header/Navbar";
import MobileNavbar from "@/app/(home)/_components/header/MobileNavbar";
import PageHeader from "@/app/components/PageHeader";
import SiteItem from "@/app/site/_components/SiteItem";
import Footer from "@/app/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Id } from "@/convex/_generated/dataModel";
import boutique1 from '/public/assets/images/boutique1.jpeg'
import boutique2 from '/public/assets/images/boutique2.jpg'
import boutique3 from '/public/assets/images/boutique3.jpg'
import boutique4 from '/public/assets/images/boutique4.jpg'

type BoutiqueType = {
  _id: Id<"sites"> | string;
  category: string;
  photos: string[];
  name: string;
  city: string;
  rating: number;
  description?: string;
  opening_hours: string | null;
  price: number | null;
  entry_type: string;
  tags?: string[];
};

const mockBoutiques: BoutiqueType[] = [
  {
    _id: '1' as unknown as Id<"sites">,
    category: 'Artisanat',
    photos: [boutique1.src],
    name: 'Atelier de Poterie de Ouidah',
    city: 'Ouidah',
    rating: 4.8,
    description: 'Découvrez les magnifiques poteries traditionnelles béninoises.',
    opening_hours: '09:00 - 18:00',
    price: 2000,
    entry_type: 'payant',
    tags: ['poterie', 'tradition', 'culture']
  },
  {
    _id: '2' as unknown as Id<"sites">,
    category: 'Artisanat',
    photos: [boutique2.src],
    name: 'Tissage de Bohicon',
    city: 'Bohicon',
    rating: 4.5,
    description: 'Venez admirer les tissus locaux tissés à la main.',
    opening_hours: '08:00 - 17:00',
    price: null,
    entry_type: 'gratuit',
    tags: ['textile', 'tissage', 'artisanat']
  },
  {
    _id: '3' as unknown as Id<"sites">,
    category: 'Artisanat',
    photos: [boutique3.src],
    name: 'Atelier de Bijoux de Porto-Novo',
    city: 'Porto-Novo',
    rating: 4.7,
    description: 'Créations de bijoux uniques en perles et métaux locaux.',
    opening_hours: '10:00 - 19:00',
    price: 5000,
    entry_type: 'payant',
    tags: ['bijoux', 'perles', 'artisanat']
  },
  {
    _id: '4' as unknown as Id<"sites">,
    category: 'Artisanat',
    photos: [boutique4.src],
    name: 'Sculpture sur Bois de Abomey',
    city: 'Abomey',
    rating: 4.6,
    description: 'Atelier traditionnel de sculpture sur bois avec démonstration.',
    opening_hours: '09:00 - 16:00',
    price: null,
    entry_type: 'gratuit',
    tags: ['sculpture', 'bois', 'tradition']
  }
];

export default function BoutiquesPage() {
  const [visible, setVisible] = useState(3); // nombre de boutiques visibles initialement

  const loadMore = () => setVisible(prev => prev + 3);

  return (
    <div className="min-h-screen">
      <Navbar />
      <MobileNavbar />
      <PageHeader
        title="Boutiques Artisanales du Bénin"
        description="Explorez les merveilles de l'artisanat béninois"
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Boutiques Artisanales" },
        ]}
      />

      <section className="px-6 md:px-10 xl:px-16 py-16 bg-cream-300">
        {mockBoutiques.length === 0 && (
          <p className="text-center">Aucune boutique trouvée.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
          {mockBoutiques.slice(0, visible).map(boutique => (
            <SiteItem key={boutique._id} item={boutique} />
          ))}
        </div>

        {visible < mockBoutiques.length && (
          <div className="flex justify-center mt-8">
            <Button onClick={loadMore}>Voir plus</Button>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
