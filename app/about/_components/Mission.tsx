import Title from "./Title"
import { Users, Target, Award, Clock } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import NumberFlow, { continuous } from '@number-flow/react';

type MissionProps = {
    title?: string;
};

export default function Mission({title}: MissionProps) {
  const [counts, setCounts] = useState({
    years: 0,
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
        years: 3,
        travelers: 2500,
        sites: 15,
        artisans: 350,
      });
    }
  }, [countersVisible]);

  const counters = [
    { key: "travelers", label: "Voyageurs", icon: Users, suffix: "+" },
    { key: "sites", label: "Sites référencés", icon: Target, suffix: "+" },
    { key: "artisans", label: "Artisans", icon: Award, suffix: "+" },
    { key: "years", label: "Années d'expérience", icon: Clock },
  ];

  return (
    <section className="px-6 md:px-16 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="w-full md:w-1/2">
          <Title name={title} />
          <div className="space-y-6 mt-4">
            <p className="text-lg md:text-xl">
              Bénin Vibrations est né de la passion de faire rayonner le patrimoine culturel béninois.
              Nous connectons les voyageurs du monde entier avec l'authenticité du Bénin, ses traditions millénaires et ses artisans talentueux.
            </p>
            <p className="text-lg md:text-xl">
              Chaque itinéraire que nous proposons est une invitation à découvrir l'âme véritable du Bénin,
              loin des sentiers battus, au plus près des communautés locales.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div ref={countersRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {counters.map(({ key, label, icon: Icon, suffix }) => (
              <div
                key={key}
                className="flex flex-col space-y-2 justify-center items-center bg-white border border-gray-50 rounded-xl shadow-xs py-6 px-5"
              >
                <Icon className="size-8 md:size-12 text-delft-blue" />
                <div className="font-raleway text-terracotta-500 font-bold text-2xl md:text-4xl flex items-center justify-center">
                  {mounted && (
                    <NumberFlow plugins={[continuous]} value={counts[key as keyof typeof counts]} />
                  )}
                  {suffix && <span className="ml-1">{suffix}</span>}
                </div>
                <span className="text-lg md:text-xl text-center">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  )
}
