import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dynamic-media-cdn.tripadvisor.com',
      },
      {
        protocol: 'https',
        hostname: 'www.pinterest.com',
      },
      {
        protocol: 'https',
        hostname: 'www.voyage-benin.com',
      },
      {
        protocol: 'https',
        hostname: '"i0.wp.com',
      },
    ],
  },
};

export default nextConfig;


// import type { NextConfig } from 'next';
// import withPWA from 'next-pwa';

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     remotePatterns: [
//       { protocol: 'https', hostname: 'dynamic-media-cdn.tripadvisor.com' },
//       { protocol: 'https', hostname: 'www.pinterest.com' },
//       { protocol: 'https', hostname: 'www.voyage-benin.com' },
//       { protocol: 'https', hostname: 'i0.wp.com' },
//     ],
//   },
// };

// // Configuration PWA séparée
// const pwaConfig = {
//   dest: 'public',
//   register: true,
//   skipWaiting: true,
//   disable: process.env.NODE_ENV === 'development',
// };

// export default withPWA({
//   ...nextConfig,
//   ...pwaConfig, // Spread direct dans withPWA
// });
