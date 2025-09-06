import { Star, Clock, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import categories from '@/app/utils/data/mockCategories';

type itemType = {
    item: {
        id: number,
        categoryId: number
        image: string,
        title: string,
        region: string,
        note: string,
        description: string,
        duration: string,
        price: string,
    };
};
export default function SiteItem({ item }: itemType) {
    const category = categories.find((cat) => cat.id === item.categoryId);
    return (
        <div
            key={item.id}
            className="bg-white  rounded-xl shadow-lg overflow-hidden"
        >
            <div className="relative group w-full h-56 overflow-hidden cursor-pointer">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="group-hover:scale-110 transform transition-all duration-500 object-cover"
                />
                <div className="relative mx-2 top-4 flex justify-between">
                    <div>
                        <span className={`text-white 
                        rounded-full px-4 text-sm py-1 font-medium ${category?.color}`}>
                            {category?.name}
                        </span>

                    </div>
                    <div className="bg-black/40 flex items-center space-x-1 text-white rounded-full px-4 text-sm py-1 font-medium">
                        <Star fill="yellow" strokeWidth={0} size={16} />
                        <span className="font-semibold">
                            {item.note}
                        </span>
                    </div>
                </div>
            </div>

            <div className="p-4 space-y-2 flex flex-col justify-between">
                <div className="space-y-1">
                    <h2 className="text-terracotta-500 font-semibold flex items-center space-x-1 text-lg">
                        <MapPin size={18} />
                        <span>{item.region}</span>
                    </h2>
                    <h3 className="text-sm sm:text-xl font-medium">{item.title}</h3>
                    <p className="text-delft-blue text-base">
                        {item.description}</p>
                </div>

                <div className="flex items-center justify-between gap-4 text-terracotta-500 font-medium text-base">
                    <span className="flex items-center gap-x-2.5">
                        <Clock size={16} /> {item.duration}
                    </span>
                    <span className="flex items-center gap-x-2.5">
                        {item.price}
                    </span>
                </div>
                <div>
                    <button className="bg-linear-65 from-terracotta-500 to-sand-500
                 text-light-gray hover:from-terracotta-600
                  hover:to-sand-600 font-jost cursor-pointer flex
                  items-center justify-center rounded-full 
                  w-full py-2 gap-x-2
                  font-semibold transition">
                        <span className="font-jost">Voir détails</span>
                        <ArrowRight className="text-white w-5 h-5" />
                    </button>
                </div>

            </div>
        </div>
    )
}