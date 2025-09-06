'use client'

import Navbar from "../(home)/_components/header/Navbar";
import Mission from "./_components/Mission";
import History from "./_components/History";
import Career from "./_components/Career";
import Partners from "./_components/Partners";
import Footer from "../components/layout/Footer";

const timelineData = [
  { year: "2020", title: "Création de Wakpon Bénin", description: "Lancement du projet pour valoriser la culture béninoise." },
  { year: "2021", title: "Premiers voyageurs", description: "Accueil des premiers groupes internationaux." },
  { year: "2022", title: "Expansion des circuits", description: "Nouveaux sites et partenariats avec artisans." },
  { year: "2023", title: "Reconnaissance locale", description: "Collaboration avec des institutions culturelles." },
];

import partner1 from '/public/assets/images/partners/01.png';
import partner2 from '/public/assets/images/partners/02.png';
import partner3 from '/public/assets/images/partners/03.png';

const partnersData = [
  { name: "partner 1", logo: partner1, url: "https://unesco.org" },
  { name: "partner 2", logo: partner2, url: "https://unesco.org" },
  { name: "partner 3", logo: partner3 },
];
import PageHeader from "../components/PageHeader";
import MobileNavbar from "../(home)/_components/header/MobileNavbar";

export default function page() {
  return (
    <div className="">
      <Navbar />
      <MobileNavbar />
      <PageHeader
        title="À propos de nous"
        description="Notre mission est de faire découvrir au monde entier la richesse culturelle et artisanale exceptionnelle du Bénin, terre d'histoire et de traditions."
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "À propos de nous" },
        ]}
      />
      <Mission title="Notre Mission"  />
      <History title="Notre Histoire"  />
      <Career title="Notre Parcours" items={timelineData} />
      <Partners title="Nos partenaires" partners={partnersData} />
      <Footer />
    </div>
  );
}
