const webpack = require('webpack');

const resolve = require('../utils/resolve');

const common = require(resolve('config/webpack.common.js'));

module.exports = {
  entry: common.entry,
  output: {
    publicPath: '/',
    filename: 'app.js',
  },
  resolve: common.resolve,
  module: {
    rules: common.module.rules.concat([
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
    ]),
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 3000,
    stats: 'minimal',
  },
  plugins: common.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ]),
  performance: {
    hints: false,
  },
};
