#!/usr/bin/env node

const meow = require('meow');

const spawn = require('../utils/spawn');
const resolve = require('../utils/resolve');

meow(`
Usage
  start [options]

Options
  --help   This help text.
`);

const args = [
  '--config', resolve('webpack.dev.js'),
  '--hot',        // switch the server to hot mode
  '--inline',     // embed the webpack-dev-server runtime into the bundle
  '--host', '0.0.0.0',  // bind to all hosts
  '--open',             // open the url in default browser
];

// Run the webpack-dev-server with some none customizable configurations.
const result = spawn('webpack-dev-server', args);

process.exitCode = result.status;
