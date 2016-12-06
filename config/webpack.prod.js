const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const resolve = require('../utils/resolve');

const common = require(resolve('config/webpack.js'));

module.exports = {
  // Don't attempt to continue if there are any errors.
  bail: true,
  entry: ['babel-polyfill'].concat(common.entry),
  output: {
    path: './build',
    filename: 'app.js',
  },
  resolve: common.resolve,
  module: {
    rules: common.module.rules.concat([
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                minimize: true,
                localIdentName: '[name]__[local]_[hash:base64:2]',
                // That many loaders after the css-loader are used to import
                // resources.
                importLoaders: 1,
              },
            },
            { loader: 'postcss-loader' },
          ],
        }),
      },
    ]),
  },
  devtool: 'cheap-module-source-map',
  plugins: common.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new ExtractTextPlugin('styles.css'),
    // Ensure the builds are consistent if source hasn't changed.
    new webpack.optimize.OccurrenceOrderPlugin(),
    // Minify the code.
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      mangle: {
        screw_ie8: true,
      },
      output: {
        screw_ie8: true,
        comments: false,
      },
    }),
  ]),
};
