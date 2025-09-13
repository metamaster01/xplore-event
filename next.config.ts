import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //    output: 'export', // ✅ tells Next.js to export static HTML into /out
  // images: {
  //   unoptimized: true, // ✅ required if you're using next/image
  // },
  /* config options here */
    eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
