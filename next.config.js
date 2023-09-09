/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        loader:'cloudinary',
       path:'https://res.cloudinary.com/dm2wuzfzc/images/upload'
           }
}

module.exports = nextConfig
