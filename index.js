module.exports = {
  config: {
    babelrc: require('./config/babelrc'),
    eslintrc: require('./config/eslintrc'),
    eslintignore: require('./config/eslintignore'),
    stylelintrc: require('./config/stylelintrc'),
    stylelintignore: require('./config/stylelintignore'),
    postcss: require('./config/postcss'),
    jest: require('./config/jest'),
    webpack: {
      common: require('./config/webpack'),
      development: require('./config/webpack.dev'),
      production: require('./config/webpack.prod'),
    },
  },
  helper: {
    resolve: require('./utils/resolve'),
    write: require('./utils/write'),
  },
};
