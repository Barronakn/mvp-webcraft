'use client';
import { useEffect, useState, useRef } from 'react';
import { testimonials } from '@/app/utils/data/mockData';
import { Quote } from 'lucide-react';
import Image from 'next/image';
import avatar from '/public/assets/images/avatar.jpg';
import NumberFlow, { continuous } from '@number-flow/react';

const Testimonials = () => {
  const [counts, setCounts] = useState({
    average: 0,
    travelers: 0,
    sites: 0,
    artisans: 0,
  });
  const [mounted, setMounted] = useState(false);
  const countersRef = useRef<HTMLDivElement>(null);
  const [countersVisible, setCountersVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCountersVisible(true);
      },
      { threshold: 0.5 }
    );

    if (countersRef.current) observer.observe(countersRef.current);
    return () => {
      if (countersRef.current) observer.unobserve(countersRef.current);
    };
  }, []);

  useEffect(() => {
    if (countersVisible) {
      setCounts({
        average: 4.8,
        travelers: 2500,
        sites: 15,
        artisans: 350,
      });
    }
  }, [countersVisible]);

  return (
    <section className="container pt-8 bg-linear-65 to-terracotta-500 from-sand-500 text-center">
      <div className="max-w-3xl md:max-w-5xl mx-auto">
        <h2 className="text-3xl lg:text-[4rem] font-inter font-semibold text-delft-blue">
          Ce que disent nos <span className="text-cream-300">Voyageurs</span>
        </h2>
        <p className="text-light-gray text-2xl lg:text-[2rem] mt-1">
          Découvrez les témoignages de ceux qui ont exploré le Bénin grâce à
          Wakpon Bénin
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-14 px-6 lg:px-16 py-14">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="flex flex-col gap-y-4 bg-white rounded-3xl justify-between p-6 shadow-lg text-left"
          >
            <div className="flex flex-col gap-y-4">
              <Quote />
              <div className="flex gap-x-2 text-terracotta-500">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span className="text-[1.75rem]" key={i}>
                    ★
                  </span>
                ))}
              </div>
              <p className="text-base text-delft-blue font-jost italic">
                {t.text}
              </p>
            </div>
            <div className="flex flex-row gap-x-6 items-center">
              <div>
                <Image
                  width={48}
                  height={48}
                  className="rounded-full bg-[#D9D9D9]"
                  src={t.picture ?? avatar}
                  alt={`Image de ${t.name}`}
                />
              </div>
              <div>
                <p className="font-semibold text-xl font-jost text-delft-blue">
                  {t.name}
                </p>
                <p className="font-jost text-xl text-delft-blue">
                  {t.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="stats mt-12 pt-16 border-t-2 border-[#D9D9D9] text-white pb-5 px-4 md:mx-16">
        <div
          ref={countersRef}
          className="px-4 grid grid-cols-2 md:grid-cols-4 gap-8 mb-6 md:mb-12"
        >
          <div className="text-center">
            <div className="font-raleway font-bold text-xl md:text-3xl lg:text-[4rem] flex items-center justify-center">
              {mounted && (
                <NumberFlow plugins={[continuous]} value={counts.average} />
              )}
              /5
            </div>
            <p className="text-2xl lg:text-[2rem] font-medium font-jost mt-2">
              Note moyenne
            </p>
          </div>

          <div className="text-center">
            <div className="font-raleway font-bold text-xl md:text-3xl lg:text-[4rem] flex items-center justify-center">
              {mounted && (
                <NumberFlow plugins={[continuous]} value={counts.travelers} />
              )}
              <span className="ml-1">+</span>
            </div>
            <p className="text-2xl lg:text-[2rem] font-medium font-jost mt-2">
              Voyageurs satisfaits
            </p>
          </div>

          <div className="text-center">
            <div className="font-raleway font-bold text-xl md:text-3xl lg:text-[4rem] flex items-center justify-center">
              {mounted && (
                <NumberFlow plugins={[continuous]} value={counts.sites} />
              )}
              <span className="ml-1">+</span>
            </div>
            <p className="text-2xl lg:text-[2rem] font-medium font-jost mt-2">
              Sites référencés
            </p>
          </div>

          <div className="text-center">
            <div className="font-raleway font-bold text-xl md:text-3xl lg:text-[4rem] flex items-center justify-center">
              {mounted && (
                <NumberFlow plugins={[continuous]} value={counts.artisans} />
              )}
              <span className="ml-1">+</span>
            </div>
            <p className="text-2xl lg:text-[2rem] font-medium font-jost mt-2">
              Artisans partenaires
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
