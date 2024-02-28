/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
  scope: '/',
});


const nextConfig = {
  images: { formats: ['image/avif', 'image/webp'] },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};



module.exports = withPWA(nextConfig);
