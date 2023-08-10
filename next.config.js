module.exports = {
  webpack: (config, options) => {
    if (!options.dev) {
      config.devtool = options.isServer ? false : 'your-custom-devtool';
    }
    return config;
  },
};
