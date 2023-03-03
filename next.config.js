/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      '*',
      'wp.crela.ro',
      'crela.ro'
    ],
  },
};

module.exports = nextConfig
