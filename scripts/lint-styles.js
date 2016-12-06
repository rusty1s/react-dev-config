#!/usr/bin/env node

const meow = require('meow');

const spawn = require('../utils/spawn');
const resolve = require('../utils/resolve');
const writeIgnoreToCache = require('../utils/write-ignore-to-cache');

// The `stylelintignore` file must be a simple file with entries in each row
// just like the normal `.gitignore`. We write this file into the .cache folder
// of the `react-dev-config` from where we can address it.
const ignore = require(resolve('config/stylelintignore.js'));
const ignorePath = writeIgnoreToCache('stylelingignore', ignore);

meow(`
Usage
  lint-styles [options]

Options
  --help   This help text.
`);

const args = [
  '--config', resolve('config/stylelintrc.js'),
  '--ignore-path', ignorePath,
  // '--allow-empty-input',
  '**/*.css',
];

// Lint all style files with stylelint.
const result = spawn('stylelint', args);

process.exitCode = result.status;
