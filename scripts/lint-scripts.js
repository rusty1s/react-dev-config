#!/usr/bin/env node

const path = require('path');

const spawn = require('../utils/spawn');
const resolve = require('../utils/resolve');
const write = require('../utils/write');

// The `eslintignore` file must be a simple file with entries in each row just
// like the normal `.gitignore`. We write this file into the .cache folder of
// the `react-dev-config` from where we can address it.
const ignore = require(resolve('config/eslintignore.js'))
  .reduce((prev, entry) => `${prev}\n${entry}`);

const cachePath = path.join(__dirname, '../.cache');
const ignorePath = write(cachePath, 'eslintignore', ignore));

const result = spawn('eslint', [
  '--config', resolve('config/eslintrc.js'),
  '--ignore-path', ignorePath,
  '--ext', '.js',
  '--ext', '.jsx',
  '--cache',
  '.',
]);

process.exitCode = result.status;
