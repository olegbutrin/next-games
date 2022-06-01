/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    apiKey: "0fd7438156a34f4789ffd3ccc1ffb799",
  },
  images: {
    domains: ["api.rawg.io", "media.rawg.io"],
  },
};

module.exports = nextConfig;
