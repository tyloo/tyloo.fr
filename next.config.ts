import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  experimental: {
    // The root layout sits under app/[lang], so unmatched URLs need a standalone 404.
    globalNotFound: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        // `as: "*.css"` would strip CSS Modules of their class mapping.
        condition: { not: { path: /\.module\.css$/ } },
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
