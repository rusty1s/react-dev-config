#!/usr/bin/env node

const spawn = require('../utils/spawn');
const configPath = require('../utils/config-path');

const result = spawn('eslint', [
  '--config', `${path}/.eslintrc`,
  '--ignore-path', `${path}/.eslintignore`,
  '--ext', '.js,.jsx',
  '--fix',
  '.',
]);

process.exit(result.status);
