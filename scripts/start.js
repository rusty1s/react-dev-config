#!/usr/bin/env node

const meow = require('meow');

const spawn = require('../utils/spawn');
const resolve = require('../utils/resolve');

meow(`
Usage
  start

Options
  --help   This help text.
`);

const args = [
  '--config', resolve('config/webpack.dev.js'),
  '--host', '0.0.0.0',  // bind to all hosts
  '--open',             // open the url in default browser
];

// Run the webpack-dev-server with some none customizable configurations.
const result = spawn('webpack-dev-server', args);

process.exitCode = result.status;
