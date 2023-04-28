/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['a.storyblok.com','images.unsplash.com'],
    deviceSizes: [600, 960, 1280,1440, 1920],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
},
}

module.exports = nextConfig
