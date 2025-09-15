'use client'

import Navbar from "../(home)/_components/header/Navbar";
import { ArrowRight, Clock, Users } from 'lucide-react';
import sites from '@/app/utils/data/mockSites';
import { usePaginatedQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import SiteItem from './_components/SiteItem'
import PageHeader from "../components/PageHeader";
import { Button } from '@/components/ui/button';

import Footer from "../components/layout/Footer";
import MobileNavbar from "../(home)/_components/header/MobileNavbar";

export default function page() {
    const { results, status, loadMore } = usePaginatedQuery(
        api.queries.sites.listSites,
        {},
        { initialNumItems: 8 }
      );
        if (status === 'LoadingFirstPage') return <p>Loading...</p>;

    return (
        <div className="">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   gap-4 mx-auto">
                    {results.map((site) => (
                        <SiteItem item={site} key={site._id} />
                    ))}
                </div>
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
