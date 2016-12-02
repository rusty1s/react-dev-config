#!/usr/bin/env node

const path = require('path');

const spawn = require('../utils/spawn');
const resolve = require('../utils/resolve');
const write = require('../utils/write');
const writeBabelrc = require('../utils/write-babelrc');

writeBabelrc();

const jest = require(resolve('config/jest.js'));

// Proxy is enabled in Node.js v6.* by default; if you are not on Node v6.*
// yet, make sure you invoke Jest using node --harmony_proxies
// https://facebook.github.io/jest/docs/tutorial-webpack.html
const version = parseInt(process.version.match(/\d/)[0], 10);
const harmony = version < 6 ? ['--harmony_proxies'] : [];

write(path.resolve(__dirname, '../cache'), 'jest.json', JSON.stringify(jest));

const result = spawn('jest', [
  '--config', path.resolve(__dirname, '../cache/jest.json'),
  '--coverage',
], harmony);

process.exitCode = result.status;
