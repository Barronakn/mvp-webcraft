import destination1 from '/public/assets/images/Benin.jpg'
import destination2 from '/public/assets/images/amazon.jpg'
import destination3 from '/public/assets/images/Benin.jpg'
import picture2 from '/public/assets/images/avatar.jpg'
import { Calendar, Heart, MapPin } from 'lucide-react';

export const destinations = [
  {
    id: 1,
    title: "Cotonou",
    region: "Littoral, Bénin",
    description:
      "Capitale économique dynamique où tradition et modernité se mélangent harmonieusement.",
    duration: "2-3 jours",
    visitors: "80k+",
    tags: ["Marché Dantokpa", "Plage de Fidjrossè", "Place de l’Amazone"],
    image: destination1, 
  },
  {
    id: 2,
    title: "Cotonou",
    region: "Littoral, Bénin",
    description:
      "Capitale économique dynamique où tradition et modernité se mélangent harmonieusement.",
    duration: "2-3 jours",
    visitors: "80k+",
    tags: ["Marché Dantokpa", "Plage de Fidjrossè", "Place de l’Amazone"],
    image: destination2,
  },
  {
    id: 3,
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