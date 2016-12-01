#!/usr/bin/env node

const spawn = require('../utils/spawn');
const configPath = require('../utils/structure').configPath;

const result = spawn('node', [
  '--harmony',
  './node_modules/.bin/jest',
  '--config', `${configPath}/jest.config.json`,
  '--coverage',
]);

process.exitCode = result.status;
