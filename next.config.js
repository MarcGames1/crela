/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
});


const nextConfig = {
    images: { formats: ['image/avif', 'image/webp']}
}



module.exports = withPWA(nextConfig);
