#!/usr/bin/env node

const spawn = require('../utils/spawn');
const resolve = require('../utils/resolve');

const result = spawn('eslint', [
  '--config', resolve('config/eslintrc'),
  '--ignore-path', resolve('config/eslintignore'),
  '--ext', '.js',
  '--ext', '.jsx',
  '--fix',
  '--cache',
  '.',
]);

process.exitCode = result.status;
