const dev = require('react-dev-config').config.webpack.development;

dev.devServer = {
  port: 3000,
};

module.exports = dev;
