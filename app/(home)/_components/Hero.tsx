import React from 'react'

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2]">
      <div className="w-full bg-[#FFFBEF] p-10 flex">
        {/* Section gauche */}
        <div className="w-1/2 flex flex-col justify-center">
          {/* Titre */}
          <h1 className="text-4xl font-extrabold leading-snug relative">
            Découvrez le{" "}
            <span className="relative inline-block text-red-600 font-extrabold">
              Bénin
              {/* Cercle autour de Bénin */}
              <div className="absolute w-20 h-10 z-10 rounded-full border-2 border-red-400 scale-110"></div>
            </span>
            , <br /> terre de culture et <br /> d
            <span className="text-green-700">’artisanat.</span>
          </h1>

          {/* Texte descriptif */}
          <p className="mt-6 text-gray-700 text-sm leading-relaxed max-w-md">
            Plongez dans un voyage authentique à travers les traditions
            millénaires, les paysages époustouflants et l’artisanat exceptionnel
            du Bénin.
          </p>

          {/* Bouton CTA */}
          <button className="mt-8 px-6 py-3 bg-[#E97B6A] text-white rounded-full font-semibold hover:bg-[#d96757] transition">
            Commencer l’aventure
          </button>
        </div>

        {/* Section droite (placeholders) */}
        <div className="w-1/2 grid grid-cols-2 gap-6">
          <div className="bg-gray-200 rounded-lg w-full h-[180px]" />
          <div className="bg-gray-200 rounded-lg w-full h-[180px]" />
          <div className="bg-gray-200 rounded-lg w-full h-[180px]" />
          <div className="bg-gray-200 rounded-lg w-full h-[180px]" />
        </div>
      </div>

      {/* Navbar */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center space-x-8">
        <a href="#" className="text-gray-800 font-medium">
          Accueil
        </a>
        <a href="#" className="text-gray-800 font-medium">
          A Propos
        </a>
        <a href="#" className="text-gray-800 font-medium">
          Sites Touristiques
        </a>
        <button className="px-4 py-2 bg-gray-200 rounded-md font-semibold">
          CTA
        </button>
      </div>
    </div>
  )
}

export default Hero
