#!/usr/bin/env node

const spawn = require('../utils/spawn');
const resolve = require('../utils/resolve');
const writeIgnoreToCache = require('../utils/write-ignore-to-cache');

// The `stylelintignore` file must be a simple file with entries in each row
// just like the normal `.gitignore`. We write this file into the .cache folder
// of the `react-dev-config` from where we can address it.
const ignore = require(resolve('config/stylelintignore.js'));
const ignorePath = writeIgnoreToCache('stylelingignore', ignore);

const result = spawn('stylelint', [
  '--config', resolve('config/stylelintrc.js'),
  '--ignore-path', ignorePath,
  '**/*.css',
]);

process.exitCode = result.status;
