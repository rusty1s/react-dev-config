const makeDir = require('mkdirp');
const fs = require('fs');

module.exports = function write(dir, filename, data) {
  makeDir.sync(dir);
  fs.writeFileSync(`${dir}/${filename}`, data);
};
