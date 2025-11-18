import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "royalsweetbakery.net",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.parentmap.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "wp.pgames.guru",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "rachaelsrawfood.com",
        pathname: "**",
      },
    ],
  },
};