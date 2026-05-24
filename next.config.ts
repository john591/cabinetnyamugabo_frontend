import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "192.168.1.67", "192.168.1.69"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.mapbox.com",
      },
      {
        protocol: "https",
        hostname: "nyamugabo-bucket.s3.us-west-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "nyamugabo-bucket.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
