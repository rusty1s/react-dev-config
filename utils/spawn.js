const crossSpawn = require('cross-spawn');

module.exports = function spawn(program, config = []) {
  const result = crossSpawn.sync('node', [
    `${process.cwd()}/node_modules/.bin/${program}`,
  ].concat(config),
  { stdio: 'inherit' });

  if (result.status > 0) throw new Error(result);

  return result;
};
