const path = require('path');

const crossSpawn = require('cross-spawn');

/**
 * Spawns a child process from the ./node_modules/.bin directory with specific
 * arguments.
 **/
module.exports = function spawn(prg, prgArgs, nodeArgs) {
  // The required program is always in the current working directories
  // node_modules/.bin folder.
  const prgPath = path.join(process.cwd(), 'node_modules', '.bin', prg);

  // The arguments of a node program have the following order:
  // 1. node arguments
  // 2. program path
  // 3. program arguments
  // Build the arguments that way. Fallback if no arguments are passed.
  const args = (nodeArgs || []).concat(prgPath).concat(prgArgs || []);

  // Call the program as a child process.
  return crossSpawn.sync('node', args, { stdio: 'inherit' });
};
