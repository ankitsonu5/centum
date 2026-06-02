/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NEXT_STATIC_EXPORT === "true" ? "export" : undefined,
  trailingSlash: true,
  reactCompiler: true,
  poweredByHeader: false,
  compress: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
