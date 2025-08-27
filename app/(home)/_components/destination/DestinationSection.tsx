import { Clock, Users } from "lucide-react";
import Image from "next/image";
import BtnAndArrow from "../btnandarrow";
import { destinations } from "@/app/utils/data/mockData";


const Destinations = () => (
  <section className="p-16">
    <div className="grid md:grid-cols-3 gap-x-14 mx-auto">
      {destinations.map((dest) => (
        <div
          key={dest.id}
          className="bg-white rounded-[1.25rem] shadow-lg overflow-hidden"
        >
          <div className="relative w-full h-56">
            <Image
              src={dest.image}
              alt={dest.title}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
              <h3 className="text-[1.75rem] font-semibold">{dest.title}</h3>
              <p className="text-base font-medium">{dest.region}</p>
            </div>
          </div>

          <div className="p-4 space-y-[0.833125rem]">
            <p className="text-delft-blue text-base">{dest.description}</p>

            <div className="flex items-center gap-4 text-terracotta-500 font-medium text-base">
              <span className="flex items-center gap-x-2.5">
                <Clock size={16} /> {dest.duration}
              </span>
              <span className="flex items-center gap-x-2.5">
                <Users size={16} /> {dest.visitors}
              </span>
            </div>

            <div className="flex flex-wrap gap-x-2.5">
              {dest.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[0.625rem] px-4.5 py-0.75 rounded-full bg-sand-500 font-medium text-light-gray"
                >
                  {tag}
                </span>
              ))}
            </div>

            <BtnAndArrow classname="text-lg lg:text-xl !py-5 lg:!py-7 !px-10 lg:!px-16" />
          </div>
        </div>
      ))}
    </div>
  </section>
);


export default Destinations;
