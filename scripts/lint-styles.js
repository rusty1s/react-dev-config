#!/usr/bin/env node

const meow = require('meow');

const spawn = require('../utils/spawn');
const resolve = require('../utils/resolve');
const write = require('../utils/write');

// The `stylelintignore` file must be a simple file with entries in each row
// just like the normal `.gitignore`. We write this file into the .cache folder
// of the `react-dev-config` from where we can address it.
const ignore = require(resolve('stylelintignore.js'));
const ignorePath = write.ignoreToCache('stylelintignore', ignore);

meow(`
Usage
  lint-styles [options]

Options
  --help   This help text.
`);

const args = [
  '--config', resolve('stylelintrc.js'),
  '--ignore-path', ignorePath,
  '--allow-empty-input',
  '**/*.css',
];

// Lint all style files with stylelint.
const result = spawn('stylelint', args);

process.exitCode = result.status;
