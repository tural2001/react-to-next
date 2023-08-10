module.exports = {
  webpack: (config, options) => {
    if (!options.dev) {
      config.devtool = options.isServer ? false : 'your-custom-devtool';
    }
    return config;
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'http',
  //       hostname: 'localhost:3000',
  //       port: '',
  //       pathname: '/my-bucket/**',
  //     },
  //   ],
  // },
};
