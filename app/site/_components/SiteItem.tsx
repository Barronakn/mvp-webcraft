import { Star, Clock, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";

type ItemType = {
    _id: Id<"sites">;
    category: string;
    photos: string[];
    name: string;
    city: string;
    rating: number;
    description?: string;
    opening_hours: string | null;
    price: number | null; // Corrigé pour correspondre à Convex
    entry_type: string; // Ajouté pour correspondre à Convex
    tags?: string[];
};

export default function SiteItem({ item }: { item: ItemType }) {
    const router = useRouter();

    return (
        <div
            key={item._id}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
            <div className="relative group w-full h-56 overflow-hidden cursor-pointer">
                <Image
                    src={item.photos[0] || "/placeholder.jpg"}
                    alt={item.name || "Site sans nom"}
                    fill
                    className="group-hover:scale-110 transform transition-all duration-500 object-cover"
                />
                <div className="relative mx-2 top-4 flex justify-between">
                    <div>
                        <span
                            className="text-white rounded-full px-4 text-sm py-1 font-medium capitalize bg-terracotta-500"
                        >
                            {item.category}
                        </span>
                    </div>
                    <div className="bg-black/40 flex items-center space-x-1 text-white rounded-full px-4 text-sm py-1 font-medium">
                        <Star fill="yellow" strokeWidth={0} size={16} />
                        <span className="font-semibold">{item.rating.toFixed(1)}</span>
                    </div>
                </div>
            </div>

            <div className="p-4 space-y-2 flex flex-col justify-between">
                <div className="space-y-1">
                    <h2 className="text-terracotta-500 font-semibold flex items-center space-x-1 text-lg">
                        <MapPin size={18} />
                        <span>{item.city}</span>
                    </h2>
                    <h3 className="text-sm sm:text-xl font-medium">{item.name}</h3>
                    <p className="text-delft-blue text-base">
                        {item.description || "Aucune description disponible"}
                    </p>
                    {item.tags && item.tags.length > 0 && (
                        <div className="flex gap-2 mt-2">
                            {item.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-terracotta-50 text-terracotta-500 px-2 py-1 rounded-full text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex items-center justify-between gap-4 text-terracotta-500 font-medium text-base">
                    {item.opening_hours && (
                        <span className="flex items-center gap-x-2.5">
                            <Clock size={16} /> {item.opening_hours}
                        </span>
                    )}
                    {(item.price || item.entry_type === "gratuit") && (
                        <span className="flex items-center gap-x-2.5">
                            {item.entry_type === "gratuit" ? "Gratuit" : item.price}
                        </span>
                    )}
                </div>
                <div>
                    <button
                        onClick={() => router.push(`/site/${item._id}`)}
                        className="bg-gradient-to-r from-terracotta-500 to-sand-500 text-light-gray hover:from-terracotta-600 hover:to-sand-600 font-jost cursor-pointer flex items-center justify-center rounded-full w-full py-2 gap-x-2 font-semibold transition"
                    >
                        <span className="font-jost">Voir détails</span>
                        <ArrowRight className="text-white w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}