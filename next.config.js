/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  scope: '/',
  reloadOnOnline: true,
cacheOnFrontEndNav: true,
disable: false,


});


const nextConfig = {
    images: { formats: ['image/avif', 'image/webp']}
}



module.exports = withPWA(nextConfig);
