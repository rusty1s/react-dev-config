#!/usr/bin/env node

const spawn = require('../utils/spawn');
const resolve = require('../utils/resolve');

// Run the webpack-dev-server with some none customizable configurations.
const result = spawn('webpack-dev-server', [
  '--config', resolve('config/webpack.dev.js'),
  '--host', '0.0.0.0',  // bind to all hosts
]);

process.exitCode = result.status;
