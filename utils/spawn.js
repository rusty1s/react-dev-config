const crossSpawn = require('cross-spawn');

module.exports = function spawn(program, config, nodeConfig) {
  const path = [`${process.cwd()}/node_modules/.bin/${program}`];

  const result = crossSpawn.sync('node',
  (nodeConfig || []).concat(path).concat(config || []),
  { stdio: 'inherit' });

  return result;
};
