/* eslint-env node */

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;

// images: {
//   loader: 'cloudinary',
//   path: 'https://res.cloudinary.com/dm2wuzfzc/images/upload',
// },
