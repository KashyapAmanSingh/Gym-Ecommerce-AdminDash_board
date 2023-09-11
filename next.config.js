/* eslint-env node */

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      loader: 'cloudinary',
      path: 'https://res.cloudinary.com/dm2wuzfzc/images/upload',
    },
     async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000'
      }
    ]
  }
  };
  
  module.exports = nextConfig;
  
