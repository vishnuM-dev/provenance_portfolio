import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  allowedDevOrigins: [
    'localhost',
    'localhost:3000',
    '127.0.0.1',
    '127.0.0.1:3000',
    '192.168.1.9',
    '192.168.1.9:3000',
    '10.246.1.179',
    '10.246.1.179:3000',
    '192.168.1.35',
    '192.168.1.35:3000',
    '192.168.1.36',
    '192.168.1.36:3000',
    '192.168.1.12',
    '192.168.1.12:3000',
  ],
  async rewrites() {
    return [
      {
        source: '/projects',
        destination: '/portfolio',
      },
    ];
  },
};

export default nextConfig;
