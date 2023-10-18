/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/fasttest',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, options) => {
    if (!options.dev) {
      config.devtool = options.isServer ? false : 'source-map';
    }
    return config;
  },
};

module.exports = nextConfig;
