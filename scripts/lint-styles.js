#!/usr/bin/env node

const spawn = require('../utils/spawn');
const resolve = require('../utils/resolve');

const write = require('../utils/cache');

const stylelintignore = require('../config/stylelintignore')
  .reduce((prev, entry) => `${prev}\n${entry}`);

write(resolve('.cache'), 'stylelintignore', stylelintignore);

const result = spawn('stylelint', [
  '--config', resolve('config/stylelintrc.js'),
  '--ignore-path', resolve('.cache/stylelintignore'),
  '**/*.css',
  '**/*.scss',
]);

process.exitCode = result.status;
