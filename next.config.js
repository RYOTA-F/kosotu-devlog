/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        port: '',
        pathname: '/assets/**',
      },
    ],
  },
  // NOTE: https://nextjs.org/docs/api-reference/next.config.js/custom-page-extensions
  pageExtensions: ['page.tsx'],
}

module.exports = nextConfig
