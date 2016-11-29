#!/usr/bin/env node

const spawn = require('../utils/spawn');
const configPath = require('../utils/structure').configPath;

const result = spawn('webpack', [
  '--config', `${configPath}/webpack.prod.config.js`,
]);

process.exitCode = result.status;
