import type { NextConfig } from "next";

// Next.js optimizes images automatically through the <Image /> component.
// For security and performance, it only allows images from approved domains.
// Since you’re loading images from Unsplash, you must explicitly allow that host. Otherwise you’ll get an error
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
