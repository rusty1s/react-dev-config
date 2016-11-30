const webpack = require('webpack');

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
        use: 'babel-loader',
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
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
};
