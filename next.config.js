/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // TODO: RemotePath変更 (Mockデータ用に一時設定)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sp-ao.shortpixel.ai',
        port: '',
        pathname: '/client/**',
      },
    ],
  },
}

module.exports = nextConfig
