'use client';

import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex px-6 lg:px-16 z-50 bg-cream-300 fixed left-0 top-0 w-full py-4 lg:py-4 justify-between items-center shadow">
      <Logo />
      <div className="hidden lg:flex flex-row text-gra space-x-20 items-center">
        <div className="flex flex-row space-x-4 items-center">
          <Link href="/" className="text-gray-800 hover:text-terracotta-500 text-base font-inter font-semibold transition duration-300">
            Accueil
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-terracotta-500 text-base font-inter font-semibold transition duration-300">
            À Propos de nous
          </Link>
          <Link
            href="/sites"
            className="text-gray-800 hover:text-terracotta-500 text-base font-inter font-semibold transition duration-300"
          >
            Sites Touristiques
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-terracotta-500 text-base font-inter font-semibold transition duration-300">
            Contactez-nous
          </Link>
        </div>

        <Button
          onClick={() => router.push('/explore')}
          className="!px-1 md:!px-2 !py-2 lg:!px-4 transition bg-gray-200 rounded-md font-semibold"
        >
          Explorer vos destinations
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
