const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    // Ensure the builds are consistent if source hasn't changed.
    new webpack.optimize.OccurenceOrderPlugin(),
    // Dedupe duplicated modules.
    new webpack.optimize.OccurenceOrderPlugin(),
    // Minify the code.
    new webpack.optimize.UglifyJSPlugin({
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
  ],
};
