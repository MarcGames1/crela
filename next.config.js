/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
disable: process.env.NODE_ENV === 'development',
  dest: 'public',
  register: true,
  reloadOnOnline: true,
cacheOnFrontEndNav: true,


});


const nextConfig = {
    images: { formats: ['image/avif', 'image/webp']}
}



module.exports = withPWA(nextConfig);
