import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Suppress the localStorage errors in dev mode
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Ignore the localStorage warnings
      config.ignoreWarnings = [
        /localStorage/,
      ];
    }
    return config;
  },
};

export default nextConfig;
