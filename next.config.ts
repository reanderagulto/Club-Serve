import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export as static site for Cloudflare Pages
  output: "export",

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Add trailing slashes for better static hosting
  trailingSlash: true,

  // Disable static optimization warnings
  staticPageGenerationTimeout: 60,

  // Configure for Cloudflare Pages
  distDir: "out",

  // Ensure no dynamic routes
  experimental: {
    // Enable if needed for performance
    // optimizePackageImports: ["@/components"],
  },
};

export default nextConfig;
