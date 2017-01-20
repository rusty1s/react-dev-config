#!/usr/bin/env node

const meow = require('meow');

const spawn = require('../utils/spawn');
const resolve = require('../utils/resolve');

meow(`
Usage
  build [options]

Options
  --help   This help text.
`);

const args = [
  '--config', resolve('webpack.prod.js'),
];

// Run webpack for building the bundle for use in production.
const result = spawn('webpack', args);

process.exitCode = result.status;
