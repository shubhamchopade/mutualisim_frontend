/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["images.pexels.com", "images.unsplash.com"]
  }
}

module.exports = nextConfig
