const path = require('path');
const makeDir = require('mkdirp');
const fs = require('fs');

/**
 * Writes text to a .cache folder in the root of the `react-dev-config` module.
 * Creates the necessary path if needed.
 **/
module.exports = function writeToCache(filename, text) {
  const dir = path.join(__dirname, '../.cache');

  makeDir.sync(dir);

  const filepath = `${dir}/${filename}`;

  try {
    fs.unlinkSync(filepath);
  } finally {
    fs.writeFileSync(filepath, text);
  }

  return filepath;
};
