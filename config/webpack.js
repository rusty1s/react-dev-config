const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const resolve = require('../utils/resolve');
const writeIgnoreToCache = require('../utils/write-ignore-to-cache');

const postcss = require(resolve('config/postcss.js'));
const stylelintignore = require(resolve('config/stylelintignore.js'));

module.exports = {
  entry: [
    './src/index.jsx',
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template/index.html',
      favicon: 'template/favicon.ico',
      inject: 'body',
      xhtml: true,
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss,
        // We need to pass the correct context.
        // https://github.com/webpack/webpack/issues/2684
        context: __dirname,
      },
    }),
    new StyleLintPlugin({
      configFile: resolve('config/stylelintrc.js'),
      ignorePath: writeIgnoreToCache('stylelintignore', stylelintignore),
      // allowEmptyInput: true,
      files: '**/*.css',
    }),
  ],
};
