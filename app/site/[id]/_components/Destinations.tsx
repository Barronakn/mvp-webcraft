import { ArrowRight, Clock, Star } from "lucide-react";
import Image from "next/image";
import BtnAndArrow from "@/app/site/[id]/_components/btnandarrow";
import { destinations } from "@/app/utils/data/mockData";
import Link from "next/link";
// import { the } from './../../../../.next/server/pages/_error';

const Destinations = () => (
    <section className="container p-6 md:p-16">
        <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-y-2 pb-12">
            <div>
                <h2 className="font-bold text-2xl lg:text-3xl xl:text-4xl text-delft-blue">
                    Les destinations les plus populaires
                </h2>
            </div>
            <Link
                className="flex flex-row gap-x-2 lg:gap-x-4 self-end md:items-center"
                href="#"
            >
                <span className="text-black text-lg lg:text-2xl font-medium underline">
                    Voir toutes les destinations
                </span>
                <ArrowRight className="text-delft-blue w-6 h-6 lg:w-7 lg:h-7" />
            </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-14 mx-auto">
            {destinations.map((dest) => (
                <div
                    key={dest.id}
                    className="bg-white rounded-[1.25rem] shadow-lg overflow-hidden"
                >
                    {/* IMAGE */}
                    <div className="relative w-full h-56">
                        <Image
                            src={dest.image}
                            alt={dest.title}
                            fill
                            className="object-cover"
                        />

                        {/* BADGE & NOTE */}
                        <div className="absolute top-4 left-4 bg-terracotta-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {dest.theme}
                        </div>
                        <div className="absolute top-4 right-4 flex items-center gap-1 bg-midnight-700 text-white px-2 py-1 rounded-full text-sm font-medium">
                            <Star size={16} className="text-yellow-400 fill-yellow-400" />
                            {dest.rating}
                        </div>
                    </div>

                    {/* CONTENU */}
                    <div className="p-4 space-y-3">
                        <h3 className="text-xl sm:text-[1.75rem] font-semibold text-terracota-500">
                            {dest.title}
                        </h3>
                        <p className="text-sm sm:text-base font-medium text-gray-600">
                            {dest.subtitle}
                        </p>
                        <p className="text-delft-blue text-base">{dest.description}</p>

                        {/* Infos pratiques */}
                        <div className="flex items-center justify-between gap-36 text-terracotta-500 font-medium text-base">
                            <span className="flex items-center gap-x-2.5">
                                <Clock size={16} /> {dest.duration}
                            </span>
                            <span>{dest.price}</span>
                        </div>

                        {/* Bouton */}
                        <BtnAndArrow classname="text-lg lg:text-xl !py-4 lg:!py-6 !px-6 md:!px-10 xl:!px-14" />
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Destinations;
