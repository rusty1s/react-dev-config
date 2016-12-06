const path = require('path');
const makeDir = require('mkdirp');
const fs = require('fs');

/**
 * Writes text to a .cache folder at the root of the `react-dev-config` module.
 * Creates the necessary path if needed.
 **/
function writeToCache(filename, text) {
  const dir = path.join(__dirname, '../.cache');
  const filepath = path.join(dir, filename);

  try {
    fs.unlinkSync(filepath);
  } catch (err) {
    makeDir.sync(dir);
  } finally {
    fs.writeFileSync(filepath, text);
  }

  return filepath;
}

/**
 * Writes an ignore file passed as an array to a file with the format of a
 * `.gitignore` into the .cache folder at the root folder of the
 * `react-dev-config` module. Creates the necessary path if needed.
 **/
function writeIgnoreToCache(filename, array) {
  const ignore = array.reduce((prev, entry) => `${prev}\n${entry}`);

  return writeToCache(filename, ignore);
}

module.exports = {
  toCache: writeToCache,
  ignoreToCache: writeIgnoreToCache,
};
