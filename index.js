const eslintrc = require('./config/eslintrc');
const eslintignore = require('./config/eslintignore');
const stylelintrc = require('./config/stylelintrc');
const stylelintignore = require('./config/stylelintignore');
const webpackDev = require('./config/webpack.dev');
const webpackProd = require('./config/webpack.prod');
const postcss = require('./config/postcss');
const jest = require('./config/jest');

// Helper methods to customize configs
const resolve = require('./utils/resolve');
const writeToCache = require('./utils/write-to-cache');
const writeIgnoreToCache = require('./utils/write-ignore-to-cache');

module.exports = {
  eslintrc,
  eslintignore,
  stylelintrc,
  stylelintignore,
  webpack: {
    development: webpackDev,
    production: webpackProd,
  },
  webpackProd,
  postcss,
  jest,
  resolve,
  writeToCache,
  writeIgnoreToCache,
};
