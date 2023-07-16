/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hydrogen-strapi.s3.amazonaws.com',
      },
    ],
  },
}

module.exports = nextConfig
