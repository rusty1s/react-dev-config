#!/usr/bin/env node

const path = require('path');

const spawn = require('../utils/spawn');
const resolve = require('../utils/resolve');
const write = require('../utils/write');

const eslintignore = require(resolve('config/eslintignore.js'))
  .reduce((prev, entry) => `${prev}\n${entry}`);

write(path.resolve(__dirname, '../cache'), 'eslintignore', eslintignore));

const result = spawn('eslint', [
  '--config', resolve('config/eslintrc.js'),
  '--ignore-path', .path.resolve(__dirname, '..cache/eslintignore'),
  '--ext', '.js',
  '--ext', '.jsx',
  '--cache',
  '.',
]);

process.exitCode = result.status;
