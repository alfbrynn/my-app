/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Izin untuk avatar Google
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com', // Izin untuk avatar GitHub (Tugas 3)
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.adidas.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;