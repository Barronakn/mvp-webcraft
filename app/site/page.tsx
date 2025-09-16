'use client';

import Navbar from "../(home)/_components/header/Navbar";
import MobileNavbar from "../(home)/_components/header/MobileNavbar";
import PageHeader from "../components/PageHeader";
import SiteItem from "./_components/SiteItem";
import { Button } from '@/components/ui/button';
import Footer from "../components/layout/Footer";
import { usePaginatedQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Doc } from '@/convex/_generated/dataModel';

export default function SitesPage() {
  const { results, status, loadMore } = usePaginatedQuery(
    api.queries.sites.listSites,
    {},
    { initialNumItems: 8 }
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <MobileNavbar />
      <PageHeader
        title="Sites Touristiques"
        description="Explorez les merveilles historiques, culturelles et naturelles du Bénin"
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Sites Touristiques" },
        ]}
      />
      <section className="px-6 md:px-10 xl:px-16 py-16 bg-cream-300">
        {status === 'LoadingFirstPage' && <p className="text-center">Chargement...</p>}
        {results === undefined && status !== 'LoadingFirstPage' && (
          <p className="text-center text-red-500">Erreur lors du chargement des sites.</p>
        )}
        {results && results.length === 0 && status !== 'LoadingFirstPage' && (
          <p className="text-center">Aucun site touristique trouvé.</p>
        )}
        {results && results.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
            {results.map((site: Doc<"sites">) => (
              <SiteItem item={site} key={site._id} />
            ))}
          </div>
        )}
        {status === 'CanLoadMore' && (
          <div className="flex justify-center mt-8">
            <Button onClick={() => loadMore(4)}>Voir plus</Button>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}