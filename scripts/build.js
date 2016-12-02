#!/usr/bin/env node

const spawn = require('../utils/spawn');
const resolve = require('../utils/resolve');

// Run webpack for building the bundle for use in production.
const result = spawn('webpack', [
  '--config', resolve('config/webpack.prod.js'),
]);

process.exitCode = result.status;
