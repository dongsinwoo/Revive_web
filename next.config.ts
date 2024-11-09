import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      encoding: false,
    };
    return config;
  },
}

export default nextConfig
