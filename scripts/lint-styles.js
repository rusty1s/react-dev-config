#!/usr/bin/env node

const spawn = require('../utils/spawn');
const resolve = require('../utils/resolve');

const result = spawn('stylelint', [
  '--config', resolve('config/stylelintrc'),
  '--ignore-path', resolve('config/stylelintignore'),
  '**/*.css',
  '**/*.scss',
]);

process.exitCode = result.status;
