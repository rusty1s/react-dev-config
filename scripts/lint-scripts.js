#!/usr/bin/env node

const meow = require('meow');

const spawn = require('../utils/spawn');
const resolve = require('../utils/resolve');
const write = require('../utils/write');

// The `eslintignore` file must be a simple file with entries in each row just
// like the normal `.gitignore`. We write this file into the .cache folder of
// the `react-dev-config` from where we can address it.
const ignore = require(resolve('config/eslintignore.js'));
const ignorePath = write.ignoreToCache('eslintignore', ignore);

const flags = meow(`
Usage
  lint-scripts [options]

Options
  --help  This help text.
  --fix   Autommatically fix problems.
`).flags;

const args = [
  '--config', resolve('config/eslintrc.js'),
  '--ignore-path', ignorePath,
  '--ext', '.js',
  '--ext', '.jsx',
  '--cache',
].concat(flags.fix ? ['--fix'] : []).concat(['.']);

// Lint all script files with eslint.
const result = spawn('eslint', args);

process.exitCode = result.status;
