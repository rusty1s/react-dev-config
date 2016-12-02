#!/usr/bin/env node

const spawn = require('../utils/spawn');
const resolve = require('../utils/resolve');

const write = require('../utils/cache');

const eslintignore = require('../config/eslintignore')
  .reduce((prev, entry) => `${prev}\n${entry}`);

write(resolve('.cache'), 'eslintignore', eslintignore);

const result = spawn('eslint', [
  '--config', resolve('config/eslintrc.js'),
  '--ignore-path', resolve('.cache/eslintignore'),
  '--ext', '.js',
  '--ext', '.jsx',
  '--fix',
  '--cache',
  '.',
]);

process.exitCode = result.status;
