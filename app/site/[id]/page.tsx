'use client';

import * as React from "react";

import Hero from '@/app/site/[id]/_components/Hero';
import Cta from "@/app/site/[id]/_components/Cta";
import Carte from "@/app/site/[id]/_components/Carte";
import Destinations from "@/app/site/[id]/_components/Destinations";
import Footer from "@/app/components/layout/Footer";
import Navbar from '@/app/(home)/_components/header/Navbar';
import MobileNavbar from '@/app/(home)/_components/header/MobileNavbar';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';

export default function SiteDetail({ params }: { params: Promise<{ id: string }> }) {
    // ✅ unwrap params (Next.js 15)
    const { id } = React.use(params);

    const site = useQuery(api.sites.getById, { id: id as Id<"sites"> });

    if (site === undefined) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen">
                Chargement...
            </div>
        );
    }
    if (site === null) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen">
                Aucune destination trouvée
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <MobileNavbar />
            <Hero id={id as Id<"sites">} />
            <Cta site={site} />
            <Carte site={site} />
            <Destinations />
            <Footer />
        </div>
    );
}
