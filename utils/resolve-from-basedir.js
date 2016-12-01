const name = require('../package.json').name;

module.exports = function resolveFromBasedir(path) {
  const regexp = new RegExp(`${name}$`)
  const cwd = process.cwd();

  // Check whether we are in the modules directory or in a module which adds
  // this module as a dependency by reading the current working directory.
  if (regexp.test(cwd)) {
    return `${cwd}/${path}`;
  } else {
    return `${cwd}/node_modules/${name}/${path}`;
  }
}
