import Logo from '@/components/logo';
import facebook from '/public/assets/icons/facebook.svg';
import x from '/public/assets/icons/x.svg';
import insta from '/public/assets/icons/insta.svg';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white text-black p-10 md:p-16">
      <div className="flex flex-col xl:flex-row gap-y-10 xl:gap-y-0 items-center justify-between">
        <div className="flex flex-col gap-y-4">
          <Logo />
          <p className="font-jost max-w-2xl xl:max-w-auto text-base text-delft-blue">
            Votre passerelle vers la découverte authentique du Bénin. <br className='hidden xl:block'  />{' '}
            Explorez, rencontrez, vivez des expériences uniques au <br className='hidden xl:block' /> cœur
            de l&apos;Afrique de l&apos;Ouest.
          </p>

          <div className="flex space-x-4">
            <Link
              href="#"
              className="w-10 h-10 bg-[#D9D9D9]/50 rounded-full flex items-center justify-center hover:bg-[#D9D9D9] transition-colors"
            >
              <Image width={20} height={20} alt='icon réseaux sociaux' src={facebook} />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 bg-[#D9D9D9]/50 rounded-full flex items-center justify-center hover:bg-[#D9D9D9] transition-colors"
            >
            <Image width={20} height={20} alt='icon réseaux sociaux' src={insta} /></Link>
            <Link
              href="#"
              className="w-10 h-10 bg-[#D9D9D9]/50 rounded-full flex items-center justify-center hover:bg-[#D9D9D9] transition-colors"
            >
            <Image width={20} height={20} alt='icon réseaux sociaux' src={x} /></Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation */}
          <div>
            <h3 className="text-lg md:text-2xl font-semibold uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-gray-900 transition"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-gray-900 transition"
                >
                  A Propos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-gray-900 transition"
                >
                  Sites Touristiques
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg md:text-2xl font-semibold uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-gray-900 transition"
                >
                  Mention légales
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-gray-900 transition"
                >
                  Politiques de Confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-gray-900 transition"
                >
                  Conditions d&apos;utilisation (CGU)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg md:text-2xl font-semibold uppercase mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="mailto:contact@wakponbenin.com"
                  className="text-black hover:text-gray-900 transition"
                >
                  contact@wakponbenin.com
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+2290197223344"
                  className="text-black hover:text-gray-900 transition"
                >
                  +229 01 97223344
                </Link>
              </li>
              <li className="text-black">Cotounou, Bénin</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Description et copyright */}
      <div className="mt-10 pt-4 border-t-2 border-delft-blue">
        <p className="text-center">
          © 2025 Wakpon Bénin. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
