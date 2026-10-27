/** @type {import('next').NextConfig} */
const nextConfig = {
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
  allowedDevOrigins: ['192.168.1.36', '192.168.1.12', 'localhost:3000'],
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
