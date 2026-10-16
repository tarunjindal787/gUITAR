/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/gUITAR/practice',
  assetPrefix: '/gUITAR/practice/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
