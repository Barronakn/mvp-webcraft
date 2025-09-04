"use client";

import MobileNavbar from '@/app/(home)/_components/header/MobileNavbar';
import Navbar from '@/app/(home)/_components/header/Navbar';
import { destinations } from "@/app/utils/data/mockData";
import Image from 'next/image';


export default function Details({ id }: { id: number }) {
    const destination = destinations.find((d) => d.id === id);
    if (!destination) return <div>Aucune destination trouvée</div>;
    return (
        <div className="flex flex-col justify-center items-center">
            <Navbar />
            <MobileNavbar />
            <div className="w-full h-[10rem] bg-transparant rounded-2xl">
            </div>
            <div className="flex w-[90%] h-[30rem] bg-blue-50 rounded-2xl">
                {/* Image */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                        src={destination.image}
                        alt={destination.title}
                        fill
                        className="object-top"
                    />
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
}