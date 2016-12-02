#!/usr/bin/env node

const spawn = require('../utils/spawn');
const resolve = require('../utils/resolve');

// Proxy is enabled in Node.js v6.* by default; if you are not on Node v6.*
// yet, make sure you invoke Jest using node --harmony_proxies
// https://facebook.github.io/jest/docs/tutorial-webpack.html
const version = parseInt(process.version.match(/\d/)[0], 10);
const harmony = version < 6 ? ['--harmony_proxies'] : [];

const result = spawn('jest', [
  '--config', resolve('config/jest.config.json'),
  '--coverage',
], harmony);

process.exitCode = result.status;
