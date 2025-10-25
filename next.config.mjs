/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 16+ no longer supports eslint in next.config.mjs
  typescript: {
    ignoreBuildErrors: true, // allows build even if TS errors exist
  },
  images: {
    unoptimized: true, // GitHub Pages cannot handle next/image optimization
  },
  output: 'export', // enables static export
  basePath: '', // repo name
  assetPrefix: '', // ensures CSS/JS/assets/video links work
};

export default nextConfig;
