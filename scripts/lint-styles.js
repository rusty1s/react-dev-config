#!/usr/bin/env node

const path = require('path');

const spawn = require('../utils/spawn');
const resolve = require('../utils/resolve');
const write = require('../utils/write');

const stylelintignore = require(resolve('config/stylelintignore.js'))
  .reduce((prev, entry) => `${prev}\n${entry}`);

write(path.resolve(__dirname, '../cache'), 'stylelintignore', stylelintignore));

const result = spawn('stylelint', [
  '--config', resolve('config/stylelintrc.js'),
  '--ignore-path', .path.resolve(__dirname, '..cache/styleintignore'),
  '**/*.css',
  '**/*.scss',
]);

process.exitCode = result.status;
