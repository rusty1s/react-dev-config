const path = require('path');

const resolve = require('./resolve');
const write = require('./write');

const babelrc = require(resolve('config/babelrc.js'));

module.exports = function writeBabelrc() {
  write(path.resolve(__dirname, '..'), '.babelrc', JSON.stringify(babelrc));
}
