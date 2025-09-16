'use client';

import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Accueil' },
    { href: '/about', label: 'À Propos de nous' },
    { href: '/site', label: 'Sites Touristiques' },
    { href: '/contact', label: 'Contactez-nous' },
  ];

  return (
    <nav className="flex px-6 lg:px-16 z-50 bg-cream-300 fixed left-0 top-0 w-full py-4 lg:py-4 justify-between items-center shadow">
      <Logo />
      <div className="hidden lg:flex flex-row space-x-12 items-center">
        <div className="flex flex-row space-x-8 items-center">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-inter font-semibold transition duration-300 ${
                  isActive
                    ? 'bg-clip-text text-transparent bg-linear-65 from-terracotta-500 to-sand-500'
                    : 'text-gray-800 hover:text-terracotta-500'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
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
