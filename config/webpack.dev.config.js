// const webpack = require('webpack');
// const postcssConfig = require('./postcss.config');

module.exports = {
  entry: [
    './src/index.jsx',
  ],
  output: {
    publicPath: '/public',
    filename: 'scripts.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIndentName: '[name]__[local]_[hash:base64:2]',
              importLoaders: 1,
            },
          },
        ],
      },
    ],
  },
};
