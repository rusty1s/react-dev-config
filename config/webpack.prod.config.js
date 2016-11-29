const webpack = require('webpack');

module.exports = {
  plugins: [
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
