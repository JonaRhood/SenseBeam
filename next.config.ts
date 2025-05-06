import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dummyjson.com',
        port: '',
        pathname: '/**', // ajusta según ruta de tus imágenes
      },
    ]
  },
};

export default nextConfig;
