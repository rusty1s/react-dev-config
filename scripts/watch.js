#!/usr/bin/env node

const meow = require('meow');

const spawn = require('../utils/spawn');
const resolve = require('../utils/resolve');

meow(`
Usage
  watch [options]

Options
  --help   This help text.
`);

const args = [
  '--config', resolve('config/webpack.dev.js'),
  '--watch',
];

// Run webpack for building the bundle for use in production.
const result = spawn('webpack', args);

process.exitCode = result.status;
