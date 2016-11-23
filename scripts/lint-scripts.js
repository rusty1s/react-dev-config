#!/usr/bin/env node

const spawn = require('../utils/spawn');
const configPath = require('../utils/config-path');

const result = spawn('eslint', [
  '--config', `${configPath}/.eslintrc`,
  '--ignore-path', `${configPath}/.eslintignore`,
  '--ext', '.js',
  '--ext', '.jsx',
  '--fix',
  '.',
]);

process.exit(result.status);
