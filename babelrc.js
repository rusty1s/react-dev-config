module.exports = {
  presets: [
    ['es2015', { modules: false }],
    'react',
  ],
  plugins: [
    // Helper for common functions such as `_extend` should be added only once.
    // https://babeljs.io/docs/plugins/transform-runtime/
    'transform-runtime',

    // Transform rest properties for object destructuring assignment and spread
    // properties for object literals.
    // let { c, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
    // let n = { x, y, ...z };
    // https://babeljs.io/docs/plugins/transform-object-rest-spread/
    'transform-object-rest-spread',

    // Transforms es2015 static properties as well as properties declared with
    // the es2016 property initializer syntax.
    // https://babeljs.io/docs/plugins/transform-class-properties/
    'transform-class-properties',
  ],
  env: {
    // Make ES2015 imports readable for jest.
    test: {
      plugins: ['transform-es2015-modules-commonjs'],
    },
  },
};
