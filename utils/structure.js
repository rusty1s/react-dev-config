const moduleName = require('../package.json').name;

module.exports = {
  moduleName,
  nodeMajorVersion: parseInt(process.version.match(/\d/)[0], 10),
  configPath: `${process.cwd()}/node_modules/${moduleName}/config`,
};
