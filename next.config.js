/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  scope: '/app',

});


const nextConfig = {
    images: { formats: ['image/avif', 'image/webp']}
}



module.exports = withPWA(nextConfig);
