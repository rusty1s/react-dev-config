const crossSpawn = require('cross-spawn');

module.exports = function spawn(program, config = []) {
  const result = crossSpawn.sync('node', [
    `${process.cwd()}/node_modules/.bin/${program}`,
  ].concat(config),
  { stdio: 'inherit' });

  return result;
};
