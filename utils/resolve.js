const path = require('path');
const fs = require('fs');

const moduleName = require('../package.json').name;

/**
 * Resolve absolute path from base dir.
 **/
module.exports = function resolveConfig(name) {
  const cwd = process.cwd();

  // We need the ability to resolve a file by taking the overidden file in the
  // calling module that has `react-dev-config` as a dev dependency (if it
  // exists) or by resolving to the default file from `react-dev-config` (which
  // is placed at the top of the node_modules folder) alternatively.
  const root = path.join(cwd, 'config', name);
  const nodeModules = path.join(cwd, 'node_modules', moduleName, name);

  // Check if the resolved path exists.
  if (fs.existsSync(root)) return root;
  if (fs.existsSync(nodeModules)) return nodeModules;

  throw new Error(`${nodeModules} could not be resolved.`);
};
