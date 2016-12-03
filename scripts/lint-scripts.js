#!/usr/bin/env node

const spawn = require('../utils/spawn');
const resolve = require('../utils/resolve');
const writeIgnoreToCache = require('../utils/write-ignore-to-cache');

// The `eslintignore` file must be a simple file with entries in each row just
// like the normal `.gitignore`. We write this file into the .cache folder of
// the `react-dev-config` from where we can address it.
const ignore = require(resolve('config/eslintignore.js'));
const ignorePath = writeIgnoreToCache('eslintignore', ignore);

const result = spawn('eslint', [
  '--config', resolve('config/eslintrc.js'),
  '--ignore-path', ignorePath,
  '--ext', '.js',
  '--ext', '.jsx',
  '--cache',
  '.',
]);

process.exitCode = result.status;
