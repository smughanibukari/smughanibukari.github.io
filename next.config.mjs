// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // URL Rewrites
  async rewrites() {
    return [

    ];
  },

  // Image Optimization
  images: {
    unoptimized: true,
    domains: [""],
  },



  // Other configurations...
};

export default nextConfig;
