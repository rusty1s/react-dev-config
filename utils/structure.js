const moduleName = require('../package.json').name;

module.exports = {
  moduleName,
  configPath: `${process.cwd()}/node_modules/${moduleName}/config`,
};
