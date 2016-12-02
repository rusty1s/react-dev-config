const webpack = require('webpack');

const resolve = require('../utils/resolve');

const postcss = require(resolve('config/postcss.js'));
const babelrc = require(resolve('config/babelrc.js'));

module.exports = {
  entry: [
    './src/index.jsx',
  ],
  output: {
    publicPath: '/public',
    filename: 'scripts.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css', '.json'],
  },
  module: {
    rules: [
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
    host: '0.0.0.0',  // bind to all hosts
    open: true,       // open the url in default browser
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss,
        // We need to pass the correct context.
        // https://github.com/webpack/webpack/issues/2684
        context: __dirname,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
};
