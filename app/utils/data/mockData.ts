import destination1 from '/public/assets/images/Benin.jpg'
import destination2 from '/public/assets/images/amazon.jpg'
import destination3 from '/public/assets/images/Benin.jpg'
import artisan1 from '/public/assets/images/artisan.png'
import picture2 from '/public/assets/images/avatar.jpg'
import { Calendar, Heart, MapPin } from 'lucide-react';

export const destinations = [
  {
    id: 1,
    title: "Abomey",
    subtitle: "Porte du non retour",
    region: "Zou, Bénin",
    location: "Abomey",
    access: "Bus depuis Cotonou (3 heures)",
    hours: "09:00 - 18:00, fermé le lundi",
    price: "2000 FCFA (adulte), 1000 FCFA (étudiant)",
    description: "Capitale économique dynamique où tradition et modernité se mélangent harmonieusement.",
    theme: "Histoire Royale",
    content: "Explorez les <span class='key-term'>Palais Royaux d’Abomey</span>, un site inscrit au <span class='highlight'>patrimoine mondial de l’UNESCO</span>. Ces palais, emblèmes du royaume du Dahomey, offrent une immersion dans un patrimoine architectural et culturel exceptionnel, où chaque mur raconte une histoire séculaire.",
    story: "Remontez au <span class='highlight'>XVIIe siècle</span>, lorsque le roi <span class='key-term'>Houegbadja</span> initia la construction du royaume du Dahomey avec une vision ambitieuse : <em class='quote'>“Que le royaume prospère éternellement.”</em> De <span class='highlight'>1625 à 1900</span>, douze souverains ont façonné les <span class='key-term'>Palais Royaux</span>, ornés de <span class='subtle'>bas-reliefs narratifs</span> illustrant les conquêtes et la spiritualité du peuple Fon. Ce site est un témoignage vivant de l’histoire africaine.",
    heritage: "Inscrit au <span class='highlight'>patrimoine mondial de l’UNESCO</span> en <span class='highlight'>1985</span>, le site s’étend sur <span class='subtle'>47 hectares</span>, protégé par une zone tampon sacrée. Un inventaire de <span class='highlight'>1995</span> a recensé <span class='subtle'>184 trésors architecturaux</span>, incluant trônes, autels et sculptures. Ce patrimoine incarne la mémoire et les traditions du peuple <span class='key-term'>Fon</span>, perpétuées avec soin.",
    duration: "1 journée",
    visitors: "30 000+ par an",
    rating: "4.9",
    tags: ["Palais Royaux", "UNESCO", "Culture Fon", "Histoire Dahomey"],
    image: destination1,
  },
  {
    id: 2,
    title: "Cotonou",
    subtitle: "Porte du non retour",
    region: "Littoral, Bénin",
    location: "Cotonou",
    access: "Avion + taxi ou moto-taxi",
    hours: "Accessible 24h/24, 7j/7",
    price: "Gratuit",
    description: "Capitale économique dynamique où tradition et modernité se mélangent harmonieusement.",
    theme: "Modernité et Tradition",
    content: "<span class='key-term'>Cotonou</span>, capitale économique du Bénin, est une métropole vibrante où la modernité africaine rencontre les traditions ancestrales. Des marchés colorés aux plages paisibles, elle offre une expérience culturelle riche et diversifiée.",
    story: "Fondée au <span class='highlight'>XIXe siècle</span>, <span class='key-term'>Cotonou</span> s’est développée grâce au commerce maritime. Aujourd’hui, ses rues animées abritent le <span class='key-term'>marché Dantokpa</span>, un centre commercial majeur, et des monuments comme la <span class='key-term'>Place de l’Amazone</span>, inaugurée en <span class='highlight'>2009</span>. Cette ville incarne une harmonie entre <span class='subtle'>héritage culturel</span> et <span class='subtle'>dynamisme urbain</span>, offrant un aperçu unique du Bénin contemporain.",
    heritage: "Le <span class='key-term'>marché Dantokpa</span>, l’un des plus grands d’Afrique de l’Ouest, est un carrefour de cultures et de commerce. La plage de <span class='key-term'>Fidjrossè</span> offre un cadre serein, tandis que la <span class='key-term'>Place de l’Amazone</span> célèbre la force des femmes béninoises. Ces lieux emblématiques reflètent un <span class='subtle'>patrimoine vivant</span>, où passé et avenir se rencontrent.",
    duration: "2 à 3 jours",
    visitors: "80 000+ par an",
    rating: "4.9",
    tags: ["Marché Dantokpa", "Plage de Fidjrossè", "Place de l’Amazone", "Culture Urbaine"],
    image: destination2,
  },
  {
    id: 3,
    title: "Ouidah",
    subtitle: "Porte du non retour",
    region: "Atlantique, Bénin",
    location: "Ouidah",
    access: "Route depuis Cotonou (1 heure)",
    hours: "09:00 - 18:00",
    price: "1500 FCFA",
    description: "Capitale économique dynamique où tradition et modernité se mélangent harmonieusement.",
    theme: "Mémoire et Spiritualité",
    content: "<span class='key-term'>Ouidah</span>, ville historique sur la côte atlantique, est un lieu de mémoire et de spiritualité. Marquée par la <span class='key-term'>Route des Esclaves</span> et son héritage afro-brésilien, elle invite à une réflexion profonde sur l’histoire et la résilience.",
    story: "Aux <span class='highlight'>XVIIe et XVIIIe siècles</span>, <span class='key-term'>Ouidah</span> fut un centre majeur de la traite négrière. La <span class='key-term'>Route des Esclaves</span>, longue de <span class='subtle'>4 km</span>, mène à la <span class='key-term'>Porte du Non-Retour</span>, érigée en <span class='highlight'>1992</span>. Aujourd’hui, Ouidah est un haut lieu du <span class='key-term'>vaudou</span>, où traditions africaines et influences <span class='subtle'>afro-brésiliennes</span> se mêlent dans une harmonie culturelle.",
    heritage: "Le <span class='key-term'>Temple des Pythons</span>, sanctuaire vaudou, attire fidèles et visiteurs. La <span class='key-term'>Porte du Non-Retour</span>, classée à l’<span class='highlight'>UNESCO</span> en <span class='highlight'>2002</span>, rend hommage aux victimes de la traite. Les quartiers <span class='subtle'>afro-brésiliens</span>, avec leurs maisons colorées, témoignent d’échanges transatlantiques. Ouidah est un lieu de <span class='subtle'>pèlerinage culturel</span> et de mémoire vive.",
    duration: "1 à 2 jours",
    visitors: "50 000+ par an",
    rating: "4.9",
    tags: ["Route des Esclaves", "Porte du Non-Retour", "Temple des Pythons", "Vaudou"],
    image: destination3,
  },
  {
    id: 4,
    title: "Cotonou",
    region: "Littoral, Bénin",
    description:
      "Capitale économique dynamique où tradition et modernité se mélangent harmonieusement.",
    duration: "2-3 jours",
    visitors: "80k+",
    tags: ["Marché Dantokpa", "Plage de Fidjrossè", "Place de l’Amazone"],
    image: destination3,
  },
];

export const artisans = [
  {
    id: 1,
    name: "Artisans de Porto-Novo",
    description: "Vente d’accessoires personnalisés",
    image: artisan1,
  },
  {
    id: 2,
    name: "Artisans d’Abomey",
    description: "Arts traditionnels et sculptures",
    image: artisan1,
  },
  {
    id: 3,
    name: "Artisans de Ouidah",
    description: "Bijoux et objets spirituels",
    image: artisan1,
  },
];


export const testimonials = [
    {
      id: 1,
      picture: null,
      name: "David Koné",
      location: "Paris, France",
      text: `"Une expérience inoubliable ! Les guides locaux m’ont fait découvrir un Bénin authentique et les artisans rencontrés sont d’une générosité incroyable."`,
      rating: 5,
    },
    {
      id: 2,
      picture: picture2,
      name: "Marie Sossou",
      location: "Abidjan, Côte d'Ivoire",
      text: `"J’ai pu créer un itinéraire parfaitement adapté à mes goûts. Les palais d’Abomey et les ateliers d’artisans m’ont transporté dans l’histoire."`,
      rating: 5,
    },
    {
      id: 3,
      picture: null,
      name: "Sarah Johnson",
      location: "New York, USA",
      text: `"La richesse culturelle du Bénin m’a émerveillée. Chaque visite raconte une histoire fascinante, et l’accueil est chaleureux."`,
      rating: 5,
    },
  ];


  export const cta = [
    {
      id: 1,
      title: "Sites Authentiques",
      desc: "Découvrez des lieux chargés d'histoire",
      icon: MapPin,
    },
    {
      id: 2,
      title: "Itinéraires Sur Mesure",
      desc: "Planifiez selon vos envies",
      icon: Calendar,
    },
    {
      id: 3,
      title: "Expériences Uniques",
      desc: "Vivez des moments authentiques",
      icon: Heart,
    },
  ];