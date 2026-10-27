/** @type {import('next').NextConfig} */
const nextConfig = {
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
  allowedDevOrigins: ['192.168.1.12', 'localhost:3000'],
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
