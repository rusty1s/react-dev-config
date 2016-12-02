#!/usr/bin/env node

const path = require('path');

const spawn = require('../utils/spawn');
const resolve = require('../utils/resolve');
const write = require('../utils/write');

// The `stylelintignore` file must be a simple file with entries in each row
// just like the normal `.gitignore`. We write this file into the .cache folder
// of the `react-dev-config` from where we can address it.
const ignore = require(resolve('config/stylelintignore.js'))
  .reduce((prev, entry) => `${prev}\n${entry}`);

const cachePath = path.join(__dirname, '../.cache');
const ignorePath = write(cachePath, 'stylelintignore', ignore);

const result = spawn('stylelint', [
  '--config', resolve('config/stylelintrc.js'),
  '--ignore-path', ignorePath,
  '**/*.css',
  '**/*.scss',
]);

process.exitCode = result.status;
