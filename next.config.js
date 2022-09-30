/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.pexels.com', 'res.cloudinary.com', 'ui-avatars.com', 'grammartop.com'],
  }
}

module.exports = nextConfig
