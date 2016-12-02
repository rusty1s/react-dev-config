module.exports = {
  presets: [
    ['es2015', { modules: false }],
    'react',
  ],
  plugins: [
    // Helper for common functions such as `_extend` should be added only once.
    'transform-runtime',
  ],
  env: {
    // Make ES2015 imports readable for jest.
    test: {
      plugins: ['transform-es2015-modules-commonjs'],
    },
  },
};
