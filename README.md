# 🌍 Plateforme Tourisme & Artisanat Béninois (Wakpon)

## 🎯 Vision
Cette plateforme a pour objectif de **mettre en lumière le patrimoine touristique du Bénin** tout en valorisant **l’artisanat local**.  
Les utilisateurs pourront explorer les sites touristiques, consulter des itinéraires, et découvrir des boutiques artisanales situées à proximité ou le long des parcours touristiques.

👉 Double impact :  
1. Promouvoir le tourisme local 🇧🇯  
2. Soutenir les artisans et leurs produits 🛍️  


## 🛠️ Stack technologique

### Frontend
- **Next.js (React + TypeScript)** — Framework moderne, SEO-friendly, SSR/ISR.  
- **TailwindCSS** — Styling responsive basé sur un design system réutilisable.  

### Backend / BaaS
- **Convex** — Gestion des données en temps réel et APIs serverless.  

### Cartographie & Géolocalisation
- **React Leaflet** — Cartes interactives.  
- **Turf.js** — Calculs de distances, itinéraires, proximité.  

### Autres outils
- **Tests** : Jest + React Testing Library (unitaires), Cypress (E2E).  
- **CI/CD & Déploiement** : Vercel.  
- **Libs bonus** :
  - Swiper.js → diaporamas interactifs.  
  - TanStack Query → caching et performance des requêtes Convex.  
- **Data fetching** → Hooks dédiés (`useQuery`, `useMutation`).  


## 🚀 Installation & Setup

### Prérequis
- Node.js >= 18  
- npm ou pnpm ou yarn  

### Étapes
```bash
# 1. Cloner le projet
git clone https://github.com/Barronakn/mvp-webcraft.git
cd mvp-webcraft

# 2. Installer les dépendances
npm install
# ou
pnpm install
# ou
yarn install

# 3. Lancer le serveur de dev
npm run dev
# ou
pnpm dev
# ou
yarn dev



