const punycode = require("punycode");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@react-email/render"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.microlink.io",
        port: "",
      },
    ],
    domains: ["api.microlink.io"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async rewrites() {
    return [
      {
        source: "/api/microlink/:path*",
        destination: "https://api.microlink.io/:path*",
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        punycode: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
