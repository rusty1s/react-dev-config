const crossSpawn = require('cross-spawn');

module.exports = function spawn(program, config = []) {
  return crossSpawn.sync('node', [
    `${process.cwd()}/node_modules/.bin/${program}`,
  ].concat(config),
  { stdio: 'inherit' });
};
