/** @type {import('next').NextConfig} */

const isSourceMap = process.env.NODE_ENV === 'development';

const nextConfig = {
  productionBrowserSourceMaps: isSourceMap,
  eslint: {
    dirs: ['src'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost:3000',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
