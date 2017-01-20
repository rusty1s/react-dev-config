const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const resolve = require('./utils/resolve');
const write = require('./utils/write');

const babelrc = require(resolve('babelrc.js'));
const postcss = require(resolve('postcss.js'));
const stylelintignore = require(resolve('stylelintignore.js'));

module.exports = {
  entry: [
    './src/index.jsx',
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.es6', '.css', '.json'],
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
      configFile: resolve('stylelintrc.js'),
      ignorePath: write.ignoreToCache('stylelintignore', stylelintignore),
      allowEmptyInput: true,
      files: '**/*.css',
    }),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$|\.es6$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',  // needs to be a loader, not use
        options: {
          configFile: resolve('eslintrc.js'),
        },
      },
      {
        test: /\.jsx?$|\.es6$/,
        exclude: /node_modules/,
        use: `babel-loader?${JSON.stringify(babelrc)}`,
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        exclude: [
          /\.html?$/,   // needed for HtmlWebpackPlugin to work
          /\.jsx?$/,
          /\.es6$/,
          /\.css$/,
          /\.json$/,
        ],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/[name]_[hash:8].[ext]',
        },
      },
    ],
  },
};
