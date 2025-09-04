'use client'
import MobileNavbar from '@/app/(home)/_components/header/MobileNavbar'
import Hero from '@/app/site/[id]/_components/Hero'
import Cta from "@/app/site/[id]/_components/Cta";
import Carte from "@/app/site/[id]/_components/Carte";
import Destinations from "@/app/site/[id]/_components/Destinations";
import Footer from "@/app/components/layout/Footer";

export default function Home() {
    return (
        <div>
            <Hero id={1} />
            <MobileNavbar />
            <Cta />
            <Carte />
            <Destinations />
            <Footer />
        </div>
    );
}
