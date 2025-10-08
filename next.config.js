/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath:
    process.env.NODE_ENV === "production"
      ? "/studio-ketlyn-carvalho-landin"
      : "",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "/studio-ketlyn-carvalho-landin/"
      : "",
};

module.exports = nextConfig;
