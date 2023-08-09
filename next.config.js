/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  experimental: {},
  sassOptions: {
    fiber: false,
  },

  experimental: {
    serverComponentsExternalPackages: ['mongoose'],
  },
  env: {
    DB_URI: 'mongodb://localhost:27017',
  },
  typescript: { ignoreBuildErrors: true },
  webpack: config => {
    config.experiments = {
      topLevelAwait: true,
      layers: true,
    };
    return config;
  },
};

module.exports = nextConfig;
