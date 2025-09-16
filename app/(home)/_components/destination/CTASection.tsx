import { cta } from '@/app/utils/data/mockData';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const CTASection = () => {
  const router = useRouter();
  return (
    <section className="container p-6 lg:p-16 bg-cream-300">
      <div className="flex flex-col text-center space-y-6 justify-center items-center">
        <h3 className="font-raleway text-3xl lg:text-[4rem] lg:leading-18 font-bold max-w-3xl">
          Votre aventure béninoise{' '}
          <span className="text-terracotta-500">commence maintenant</span>
        </h3>
        <p className="text-[#010101] text-xl lg:text-2xl max-w-[44.875rem] font-inter">
          Explorez des sites historiques uniques, rencontrez des artisans
          passionnés et créez des souvenirs inoubliables au cœur de
          l&apos;Afrique de l&apos;Ouest.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-14 mx-auto px-6 md:px-8 lg:px-[16.25rem]">
        {cta.map((c) => {
          const Icon = c.icon;
          return (
            <div
              key={c.id}
              className="flex flex-col gap-y-6 items-center font-raleway font-semibold"
            >
              <div className="bg-cambridge-green-900/10 rounded-full p-3">
                <Icon className="text-cambridge-green-700 w-7 h-7" />
              </div>
              <div className="text-center">
                <h3 className="text-[1.5rem] font-semibold">{c.title}</h3>
                <p className="text-base text-terracotta-500 font-medium">
                  {c.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex cursor-pointer flex-col mt-14 sm:flex-row gap-4 justify-center">
        <button onClick={() => router.push(`/site`)} className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap font-jost font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border h-11 rounded-md text-lg px-8 py-4 text-light-gray bg-linear-65 from-terracotta-500 to-sand-500 hover:from-terracotta-600 hover:to-sand-600 transition-all duration-300 group">
          Explorer les sites touristiques
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <button onClick={() => router.push(`/artisanat`)} className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap font-jost font-medium h-11 rounded-md text-lg px-8 py-4 bg-white border border-white/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
          <span className="bg-clip-text text-transparent bg-linear-65 from-terracotta-500 to-sand-500 hover:from-terracotta-600 hover:to-sand-600 transition-all duration-300">
            Découvrir l&apos;artisanat
          </span>
        </button>
      </div>
    </section>
  );
};

export default CTASection;
