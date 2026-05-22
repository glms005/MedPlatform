import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/estheticians",
        destination: "/aestheticians",
        permanent: true,
      },
      {
        source: "/estheticians/:path*",
        destination: "/aestheticians/:path*",
        permanent: true,
      },
      {
        source: "/esthetic-procedures",
        destination: "/aesthetic-procedures",
        permanent: true,
      },
      {
        source: "/esthetic-procedures/:path*",
        destination: "/aesthetic-procedures/:path*",
        permanent: true,
      },
    ];
  },
  env: {
    NEXT_PUBLIC_BUILD_ID:
      process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? "local",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
