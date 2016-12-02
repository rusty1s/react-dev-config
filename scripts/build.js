#!/usr/bin/env node

const path = require('path');

const spawn = require('../utils/spawn');
const resolve = require('../utils/resolve');
const writeBabelrc = require('../utils/write-babelrc');

writeBabelrc();

const result = spawn('webpack', [
  '--config', resolve('config/webpack.prod.js'),
]);

process.exitCode = result.status;
