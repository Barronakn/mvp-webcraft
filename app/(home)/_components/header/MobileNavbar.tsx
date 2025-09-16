'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Compass, Info, Map, Contact2 } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

const MobileNavbar = () => {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Accueil', icon: <Home size={22} /> },
    { href: '/explore', label: 'Explorer', icon: <Compass size={22} /> },
    { href: '/site', label: 'Sites', icon: <Map size={22} /> },
    { href: '/about', label: 'À Propos', icon: <Info size={22} /> },
    { href: '/contact', label: 'Contactez-nous', icon: <Contact2 size={22} /> },
  ];

  return (
    <nav className="block lg:hidden fixed bottom-0 left-0 w-full bg-cream-300/80 backdrop-blur-md border-t border-cream-200 shadow-lg z-50">
      <ul className="flex justify-around items-center py-3">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex flex-col items-center text-gray-800 hover:text-black-blue transition-colors relative"
              >
                <motion.div
                  layoutId={isActive ? 'activeTab' : undefined}
                  className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                    isActive ? 'bg-black text-white shadow-md' : ''
                  }`}
                  initial={false}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {link.icon}
                </motion.div>

                <span
                  className={`text-xs mt-1 font-medium transition-colors duration-300 ${
                    isActive ? 'text-black' : 'text-gray-800'
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileNavbar;
