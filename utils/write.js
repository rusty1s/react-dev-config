const makeDir = require('mkdirp');
const fs = require('fs');

/**
 * Writes data to disk. Creates the necessary path if needed.
 **/
module.exports = function write(dir, filename, data) {
  makeDir.sync(dir);
  const path = `${dir}/${filename}`;
  fs.writeFileSync(path, data);
  return path;
};
