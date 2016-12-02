const eslintrc = require('./config/eslintrc');
const eslintignore= require('./config/eslintignore');
const stylelintrc = require('./config/stylelintrc');
const stylelintignore = require('./config/stylelintignore');
const webpackDev = require('./config/webpack.dev');
const webpackProd = require('./config/webpack.prod');
const postcss = require('./config/postcss');
const jest = require('./config/jest');

module.exports = {
  eslintrc,
  eslintignore,
  stylelintrc,
  stylelintignore,
  webpackDev,
  webpackProd,
  postcss,
  jest,
};
