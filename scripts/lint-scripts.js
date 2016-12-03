#!/usr/bin/env node

const meow = require('meow');

const spawn = require('../utils/spawn');
const resolve = require('../utils/resolve');
const writeIgnoreToCache = require('../utils/write-ignore-to-cache');

// The `eslintignore` file must be a simple file with entries in each row just
// like the normal `.gitignore`. We write this file into the .cache folder of
// the `react-dev-config` from where we can address it.
const ignore = require(resolve('config/eslintignore.js'));
const ignorePath = writeIgnoreToCache('eslintignore', ignore);

const flags = meow(`
Usage
  lint-scripts [options]

Options
  --help  This help text.
  --fix   Autommatically fix problems.
`).flags;

let args = [
  '--config', resolve('config/eslintrc.js'),
  '--ignore-path', ignorePath,
  '--ext', '.js',
  '--ext', '.jsx',
  '--cache',
];

if (flags.fix) args = args.concat('--fix');
args = args.concat('.');

// Lint all script files with eslint.
const result = spawn('eslint', args);

process.exitCode = result.status;
