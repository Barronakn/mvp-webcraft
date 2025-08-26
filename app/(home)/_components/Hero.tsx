'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import shape from '/public/assets/images/shape.png';
import cardImg1 from '/public/assets/images/amazon.jpg';
import cardImg2 from '/public/assets/images/Benin.jpg';
import cardImg3 from '/public/assets/images/goho-square-statue-of.jpg';
import cardImg4 from '/public/assets/images/mamelle de save.jpg';
import cardImg5 from '/public/assets/images/slave-route-view-from.jpg';
import cardImg6 from '/public/assets/images/Temple_des_pythons.jpg.jpeg';

const cardsData = [
  { front: cardImg1, back: cardImg2 },
  { front: cardImg3, back: cardImg4 },
  { front: cardImg5, back: cardImg6 },
];

const Hero = () => {
  const [flipped, setFlipped] = useState([false, false, false]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped(prev => {
        const newFlipped = [...prev];
        const randomIndex = Math.floor(Math.random() * newFlipped.length);
        newFlipped[randomIndex] = !newFlipped[randomIndex];
        return newFlipped;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-start px-6 lg:px-16 pt-45 justify-center bg-cream-300 gap-12 lg:gap-16">
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl lg:text-[3.625rem] font-raleway text-delft-blue font-extrabold leading-[120%] relative">
          Découvrez l
          <div className="relative inline-block text-terracotta-500 font-extrabold z-30">
            <span className=" text-delft-blue font-extrabold">e</span> Bénin,
            <div className="absolute top-0 -left-1 -z-10">
              <Image loading="lazy" src={shape} alt="shape icon" />
            </div>
          </div>
          <br /> terre de culture et <br /> d’
          <span className="text-cambridge-green-500">artisanat</span>
          <span className="text-black-blue">.</span>
        </h1>

        <p className="mt-6 text-black text-lg lg:text-[1.75rem] leading-9 max-w-142.5">
          Plongez dans un voyage authentique à travers les traditions millénaires, les paysages
          époustouflants et l&apos;artisanat exceptionnel du Bénin.
        </p>

        <Button className="flex mt-6 lg:mt-10 mb-6 lg:mb-16 flex-row gap-x-4 items-center text-2xl lg:text-4xl text-white rounded-full font-semibold transition !py-4 lg:!py-10 !px-8 lg:!px-[5.15625rem]">
          <span className="font-jost">Commencer l’aventure</span>
          <ArrowRight className="text-white w-6 h-6 lg:w-7 lg:h-7" />
        </Button>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="grid grid-cols-2 grid-rows-2 gap-x-4 h-126">
          <div className="row-span-2 flex flex-col gap-4">
            <div className="flex-1 perspective-1000">
              <div
                className={`relative w-70 h-70 transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                  flipped[1] ? 'rotate-y-180' : ''
                }`}
              >
                <div className="absolute w-70 h-70 backface-hidden rounded-[2rem] overflow-hidden shadow-lg">
                  <Image 
                    src={cardsData[1].front} 
                    alt="Front 02" 
                    className="object-cover w-70 h-70"
                    fill
                  />
                </div>
                <div className="absolute w-70 h-70 backface-hidden rounded-[2rem] overflow-hidden shadow-lg rotate-y-180">
                  <Image 
                    src={cardsData[1].back} 
                    alt="Back 02" 
                    className="object-cover w-70 h-70"
                    fill
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 perspective-1000">
              <div
                className={`relative w-70 h-50 transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                  flipped[2] ? 'rotate-y-180' : ''
                }`}
              >
                <div className="absolute w-70 h-50 backface-hidden rounded-[2rem] overflow-hidden shadow-lg">
                  <Image 
                    src={cardsData[2].front} 
                    alt="Front 03" 
                    className="object-cover w-full h-full"
                    fill
                  />
                </div>
                <div className="absolute w-70 h-50 backface-hidden rounded-[2rem] overflow-hidden shadow-lg rotate-y-180">
                  <Image 
                    src={cardsData[2].back} 
                    alt="Back 03" 
                    className="object-cover w-full h-full"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row-span-2 perspective-1000">
            <div
              className={`relative w-75 h-126 transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                flipped[0] ? 'rotate-y-180' : ''
              }`}
            >
              <div className="absolute w-75 h-126 backface-hidden rounded-[2rem] overflow-hidden shadow-lg">
                <Image 
                  src={cardsData[0].front} 
                  alt="Front 01" 
                  className="object-cover w-75 h-126"
                  fill
                />
              </div>
              <div className="absolute w-75 h-126 backface-hidden rounded-[2rem] overflow-hidden shadow-lg rotate-y-180">
                <Image 
                  src={cardsData[0].back} 
                  alt="Back 01" 
                  className="object-cover w-75 h-126"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;