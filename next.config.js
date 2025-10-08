/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath:
    process.env.NODE_ENV === "production"
      ? "/studio-ketlyn-carvalho-landing"
      : "",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "/studio-ketlyn-carvalho-landing/"
      : "",
};

module.exports = nextConfig;
