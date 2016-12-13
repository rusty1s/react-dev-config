module.exports = {
  presets: [
    ['es2015', { modules: false }],
    'react',
  ],
  plugins: [
    // Helper for common functions such as `_extend` should be added only once.
    'transform-runtime',
    // Transform rest properties for object destructuring assignment and spread
    // properties for object literals.
    // let { c, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
    // let n = { x, y, ...z };
    'transform-object-rest-spread',
  ],
  env: {
    // Make ES2015 imports readable for jest.
    test: {
      plugins: ['transform-es2015-modules-commonjs'],
    },
  },
};
