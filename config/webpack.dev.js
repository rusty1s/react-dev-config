const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = require('../utils/resolve');

const babelrc = require(resolve('config/babelrc.js'));
const postcss = require(resolve('config/postcss.js'));

module.exports = {
  entry: [
    './src/index.jsx',
  ],
  output: {
    publicPath: '/',
    filename: 'app.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css', '.json'],
  },
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
          name: 'static/media/[name]_[hash:8].[ext]',
        },
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 3000,
    hot: true,        // switch the server to hot mode
    inline: true,     // embed the webpack-dev-server runtime into the bundle
    open: true,       // open the url in default browser
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template/index.html',
      favicon: 'template/favicon.ico',
      inject: 'body',
      hash: true,
      xhtml: true,
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        // We need to pass the correct context.
        // https://github.com/webpack/webpack/issues/2684
        context: __dirname,
        postcss,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
};
