#!/usr/bin/env node

const spawn = require('../utils/spawn');
const resolve = require('../utils/resolve');

const result = spawn('webpack', [
  '--config', resolve('config/webpack.prod.config.js'),
]);

process.exitCode = result.status;
