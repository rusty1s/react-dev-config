const path = require('path');

module.exports = function requireConfig(filename) {
  return require(path.join(__dirname, 'config', `${filename}.js`));
};
