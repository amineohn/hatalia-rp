/** @type {import('next').NextConfig} */
const { withSuperjson } = require("next-superjson");

module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        net: "empty",
      };
    }

    return config;
  },
};

module.exports = withSuperjson()({});
