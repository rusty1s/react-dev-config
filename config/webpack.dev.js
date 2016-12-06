const webpack = require('webpack');

const common = require('./webpack');
const resolve = require('../utils/resolve');

const babelrc = require(resolve('config/babelrc.js'));

module.exports = {
  entry: common.entry,
  output: {
    publicPath: '/',
    filename: 'app.js',
  },
  resolve: common.resolve,
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',  // needs to be a loader, not use
        query: {
          configFile: resolve('config/eslintrc.js'),
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: `babel-loader?${JSON.stringify(babelrc)}`,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: '[name]__[local]_[hash:base64:2]',
              // That many loaders after the css-loader are used to import
              // resources.
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        exclude: [
          /\.html?$/,   // needed for HtmlWebpackPlugin to work
          /\.jsx?$/,
          /\.css$/,
          /\.json$/,
        ],
        use: 'url-loader',
        query: {
          limit: 10000,
          name: 'static/[name]_[hash:8].[ext]',
        },
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 3000,
    hot: true,        // switch the server to hot mode
    inline: true,     // embed the webpack-dev-server runtime into the bundle
  },
  plugins: common.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ]),
};
