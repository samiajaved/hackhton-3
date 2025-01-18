import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cdn.sanity.io'], // Add your allowed image domains here
  },
};
module.exports = nextConfig;

export default nextConfig;
