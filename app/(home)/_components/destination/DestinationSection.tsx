import { ArrowRight, Clock, Users } from 'lucide-react';
import Image from 'next/image';
import BtnAndArrow from '../btnandarrow';
import { destinations } from '@/app/utils/data/mockData';
import Link from 'next/link';

const Destinations = () => (
  <section className="container p-6 md:p-16">
    <div className='flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-y-2 pb-12'>
      <div>
        <h2 className='font-bold text-2xl lg:text-3xl xl:text-4xl text-delft-blue'>Les destinations les plus populaires</h2>
      </div>
      <Link className='flex flex-row gap-x-2 lg:gap-x-4 self-end md:items-center' href="#">
        <span className="text-black text-lg lg:text-2xl font-medium underline">Voir toutes les destinations</span>
        <ArrowRight className="text-delft-blue w-6 h-6 lg:w-7 lg:h-7" />
      </Link>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-14 mx-auto">
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
              <h3 className="text-xl sm:text-[1.75rem] font-semibold">{dest.title}</h3>
              <p className="text-sm sm:text-base font-medium">{dest.region}</p>
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

            <div className="flex flex-wrap gap-2.5">
              {dest.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[0.625rem] px-4.5 py-0.75 rounded-full bg-sand-100 font-medium text-terracotta-500"
                >
                  {tag}
                </span>
              ))}
            </div>

            <BtnAndArrow classname="text-lg lg:text-xl !py-5 lg:!py-7 !px-2 sm:!px-5 md:!px-10 xl:!px-16" />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Destinations;
