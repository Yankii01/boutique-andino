import type { NextConfig } from "next";
import nextI18n from "./next-i18next.config";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  i18n: nextI18n.i18n,
};

export default nextConfig;