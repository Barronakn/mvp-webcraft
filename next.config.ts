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
