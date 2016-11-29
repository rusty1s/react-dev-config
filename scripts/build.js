#!/usr/bin/env node

const spawn = require('../utils/spawn');
const { configPath } = require('../utils/structure');

const result = spawn('webpack', [
  '--config', `${configPath}/webpack.config.prod.js`,
]);

process.exitCode = result.status;
