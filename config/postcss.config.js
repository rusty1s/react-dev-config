const cssimport = require('postcss-import');
const cssnext = require('postcss-cssnext');

module.exports = [
  cssimport(),
  cssnext(),
];
