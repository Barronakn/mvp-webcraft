'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import shape from '/public/assets/images/shape.png';
import cardImg1 from '/public/assets/images/amazon.jpg';
import cardImg2 from '/public/assets/images/Benin.jpg';
import cardImg3 from '/public/assets/images/goho-square-statue-of.jpg';
import cardImg4 from '/public/assets/images/mamelle de save.jpg';
import cardImg5 from '/public/assets/images/slave-route-view-from.jpg';
import cardImg6 from '/public/assets/images/Temple_des_pythons.jpg.jpeg';
import BtnAndArrow from '../btnandarrow';

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
    <section className="flex container flex-col xl:flex-row items-start px-6 md:px-10 xl:px-16 pt-24 md:pt-45 justify-center bg-cream-300 gap-12 xl:gap-16 pb-6 md:pb-10 xl:pb-0">
      <div className="w-full xl:w-1/2 flex flex-col items-center justify-center">
        <h1 className="text-2xl sm:text-4xl xl:text-[3.625rem] font-raleway text-delft-blue font-extrabold leading-[120%] text-center xl:text-start relative">
          Découvrez l
          <div className="relative inline-block text-terracotta-500 font-extrabold z-30">
            <span className=" text-delft-blue font-extrabold">e</span> Bénin,
            <div className="absolute top-0 -left-1 -z-10">
              <Image loading="lazy" src={shape} alt="shape icon" />
            </div>
          </div>
          <br className='hidden xl:block' /> terre de culture et <br className='hidden xl:block' /> d’
          <span className="text-cambridge-green-500">artisanat</span>
          <span className="text-black-blue">.</span>
        </h1>

        <p className="mt-6 text-black text-center xl:text-start text-lg xl:text-[1.75rem] leading-9 max-w-142.5">
          Plongez dans un voyage authentique à travers les traditions millénaires, les paysages
          époustouflants et l&apos;artisanat exceptionnel du Bénin.
        </p>

        <BtnAndArrow classname='text-lg sm:text-2xl xl:text-4xl !py-5 xl:!py-10 !px-4 sm:!px-8 xl:!px-[5.15625rem] mt-6 xl:mt-10 mb-6 md:mb-10 xl:mb-16' />
      </div>

      <div className="w-full xl:w-1/2">
        <div className="grid grid-cols-2 grid-rows-2 gap-x-4 h-126">
          <div className="row-span-2 flex flex-col gap-4">
            <div className="flex-1 perspective-1000">
              <div
                className={`relative w-full xl:w-70 h-70 transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                  flipped[1] ? 'rotate-y-180' : ''
                }`}
              >
                <div className="absolute w-full xl:w-70 h-70 backface-hidden rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg">
                  <Image 
                    src={cardsData[1].front} 
                    alt="Front 02" 
                    className="object-cover w-full xl:w-70 h-70"
                    fill
                  />
                </div>
                <div className="absolute w-full xl:w-70 h-70 backface-hidden rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg rotate-y-180">
                  <Image 
                    src={cardsData[1].back} 
                    alt="Back 02" 
                    className="object-cover w-full xl:w-70 h-70"
                    fill
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 perspective-1000">
              <div
                className={`relative w-full xl:w-70 h-50 transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                  flipped[2] ? 'rotate-y-180' : ''
                }`}
              >
                <div className="absolute w-full xl:w-70 h-50 backface-hidden rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg">
                  <Image 
                    src={cardsData[2].front} 
                    alt="Front 03" 
                    className="object-cover w-full h-full"
                    fill
                  />
                </div>
                <div className="absolute w-full xl:w-70 h-50 backface-hidden rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg rotate-y-180">
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
              className={`relative w-full xl:w-75 h-126 transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                flipped[0] ? 'rotate-y-180' : ''
              }`}
            >
              <div className="absolute w-full xl:w-75 h-126 backface-hidden rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg">
                <Image 
                  src={cardsData[0].front} 
                  alt="Front 01" 
                  className="object-cover w-full xl:w-75 h-126"
                  fill
                />
              </div>
              <div className="absolute w-full xl:w-75 h-126 backface-hidden rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg rotate-y-180">
                <Image 
                  src={cardsData[0].back} 
                  alt="Back 01" 
                  className="object-cover w-full xl:w-75 h-126"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;