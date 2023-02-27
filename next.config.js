/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      '*',
      'www.avocatdorubotea.ro',
      'localhost',
      'lh4.googleusercontent.com',
      'lh5.googleusercontent.com',
      'lh6.googleusercontent.com',
      'api.marweb.ro',
    ],
  },
};

module.exports = nextConfig
