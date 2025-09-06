'use client'

import Navbar from "../(home)/_components/header/Navbar";
import { ArrowRight, Clock, Users } from 'lucide-react';
import sites from '@/app/utils/data/mockSites';

import SiteItem from './_components/SiteItem'
import PageHeader from "../components/PageHeader";

import Footer from "../components/layout/Footer";
import MobileNavbar from "../(home)/_components/header/MobileNavbar";

export default function page() {
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
            <section className="flex flex-col xl:flex-row items-start px-6 md:px-10 xl:px-16 py-16 justify-center bg-cream-300">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto">
                    {sites.map((site) => (
                        <SiteItem item={site} key={site.id} />
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}
