import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/ki-starter-set',
  assetPrefix: '/ki-starter-set/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
