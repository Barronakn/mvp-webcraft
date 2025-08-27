import { cta } from '@/app/utils/data/mockData';
import React from 'react';

const CTASection = () => {
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
              <div className='bg-cambridge-green-900/10 rounded-full p-3'>
                <Icon className="text-cambridge-green-700 w-7 h-7" />
              </div>
              <div className='text-center'>
                <h3 className="text-[1.5rem] font-semibold">{c.title}</h3>
                <p className="text-base text-terracotta-500 font-medium">
                  {c.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CTASection;
