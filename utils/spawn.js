const path = require('path');
const fs = require('fs');

const crossSpawn = require('cross-spawn');

// Spawns a child process from the ./node_modules/.bin directory with specific
// arguments.
module.exports = function spawn(prg, prgArgs, nodeArgs, prgBin) {
  // Find the prg in the node_modules folder.
  let modulePath = path.join(process.cwd(), 'node_modules', prg);

  // Allow symlinking of `react-dev-config`
  if (!fs.existsSync(modulePath)) {
    modulePath = path.join(process.cwd(), 'node_modules', 'react-dev-config', 'node_modules', prg);
  }

  const moduleBins = require(path.join(modulePath, 'package.json')).bin;

  // `pkgBin` is either a dictionary or a string.
  const bin = typeof moduleBins === 'string' ? moduleBins : moduleBins[prgBin || prg];

  // Build the correct path to the program.
  const prgPath = path.join(modulePath, bin);

  // The arguments of a node program have the following order:
  // 1. node arguments
  // 2. program path
  // 3. program arguments
  // Build the arguments that way. Fallback if no arguments are passed.
  const args = (nodeArgs || []).concat(prgPath).concat(prgArgs || []);

  // Call the program as a child process.
  return crossSpawn.sync('node', args, { stdio: 'inherit' });
};
