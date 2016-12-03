const writeToCache = require('./write-to-cache');

/**
 * Writes an ignore file passed as an array to a file with the format of a
 * `.gitignore` into the .cache folder in the root folder of the
 * `react-dev-config` module. Creates the necessary path if needed.
 **/
module.exports = function writeIgnoreToCache(filename, array) {
  const ignore = array.reduce((prev, entry) => `${prev}\n${entry}`);

  return writeToCache(filename, ignore);
};
