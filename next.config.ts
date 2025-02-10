import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cdn.sanity.io', 'picsum.photos'], // Liste des domaines autorisés
  }
};

export default nextConfig;
