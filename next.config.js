module.exports = {
  async headers() {
    return [
      {
        source: '/api/fasttest', // İsteğin gönderildiği yol
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // Tüm kaynaklardan erişime izin vermek için "*" kullanılabilir, ancak güvenlik açısından daha iyi bir ayar yapılması önerilir.
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
