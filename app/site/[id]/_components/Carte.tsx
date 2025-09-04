"use client";
import MapView from "@/app/site/[id]/_components/MapView";
import { artisans } from "@/app/utils/data/mockData";
import Image from "next/image";
import DestinationDetail from "@/app/site/[id]/_components/DestinationDetail"

export default function Carte() {
    return (
        <div className="flex items-center justify-center mt-16">
            <div className="p-4 relative grid grid-cols-2 gap-16 w-[90%] h-auto pb-16 border-2 border-gray-200 rounded-2xl">
                <div className="w-full h-full">
                    <DestinationDetail id={1} />
                </div>
                <div>
                    <div className="w-full h-auto mt-4">
                        <p className="text-2xl font-bold">Vue sur plan</p>
                        <MapView />
                    </div>
                    <div className="mt-10 w-full h-auto">
                        <div className="text-2xl font-bold">Artisans sur le trajet</div>
                        <div className="text-x">
                            Découvrez les artisans extraordinaires pour des accessoires, arts de tout genre à emporter comme souvenirs.
                        </div>

                        <div className="w-full h-[15rem] grid grid-cols-3 gap-20 mt-4">
                            {artisans.map((artisan) => (
                                <div key={artisan.id} className="relative h-full w-full">
                                    {/* Image */}
                                    <div
                                        className="relative w-full h-[70%] rounded-t-2xl bg-cover bg-center"
                                    // style={{ backgroundImage: `url(${artisan.image})` }}
                                    >
                                        <Image
                                            src={artisan.image}
                                            alt={artisan.name}
                                            fill
                                            className="relative rounded-t-2xl object-cover"
                                        />
                                    </div>

                                    {/* Texte */}
                                    <div className="text-x font-bold">{artisan.name}</div>
                                    <div className="text-l">{artisan.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}