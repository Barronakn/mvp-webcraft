import image from '/public/assets/images/amazon.jpg'

const sites = [
  {
    id: 1,
     categoryId: 1,
    image: image,
    title: "Porte du Non-Retour",
    region: "Ouidah",
    note: "4.1",
    description:
      "Monument historique en mémoire de la traite négrière, situé au bord de l’océan.",
    duration: "2-3h",
    price: "Gratuit",
    
  },
  {
    id: 2,
     categoryId: 5,
    image: image,
    title: "Ganvié",
    region: "Lac Nokoué",
    note: "4.5",
    description:
      "Village lacustre surnommé la Venise de l’Afrique, avec des maisons sur pilotis.",
    duration: "3-4h",
    price: "2 000/an",
  },
  {
    id: 3,
     categoryId: 6,
    image: image,
    title: "Parc National de la Pendjari",
    region: "Atacora",
    note: "4.7",
    description:
      "Réserve naturelle réputée pour ses éléphants, lions et paysages exceptionnels.",
    duration: "1-2 jours",
    price: "10 000/an",
  },
  {
    id: 4,
     categoryId: 2,
    image: image,
    title: "Palais Royaux d’Abomey",
    region: "Zou",
    note: "4.9",
    description:
      "Patrimoine mondial de l’UNESCO, ancien siège des rois du Dahomey.",
    duration: "2-3h",
    price: "5 000/an",
  },
  {
    id: 5,
     categoryId: 3,
    image: image,
    title: "Cathédrale Notre-Dame de Cotonou",
    region: "Cotonou",
    note: "4.3",
    description:
      "Église emblématique de style afro-brésilien, reconnaissable à ses briques rouges.",
    duration: "1-2h",
    price: "1 500/an",
  },
  {
    id: 6,
     categoryId: 4,
    image: image,
    title: "Village Taneka",
    region: "Donga",
    note: "3.5",
    description:
      "Village traditionnel avec cases rondes et rites ancestraux encore pratiqués.",
    duration: "3-5h",
    price: "800/an",
  },
];

export default sites;
