#!/usr/bin/env node

const path = require('path');
const fs = require('fs');

const spawn = require('../utils/spawn');
const resolve = require('../utils/resolve');
const write = require('../utils/write');

// The jest config file must be a json file.  We write this file as jon into
// the .cache folder of the `react-dev-config` from where we can address it.
const jest = require(resolve('config/jest.js'));

const cachePath = path.join(__dirname, '../.cache');
const configPath = write(cachePath, 'jest.json', JSON.stringify(jest));

// Proxy is enabled in Node.js v6.* by default; if you are not on Node v6.*
// yet, make sure you invoke Jest using node --harmony_proxies
// https://facebook.github.io/jest/docs/tutorial-webpack.html
const version = parseInt(process.version.match(/\d/)[0], 10);
const harmony = version < 6 ? ['--harmony_proxies'] : [];

// jest needs a `.babelrc` in the root of your package folder, so we write it.
const babelrc = require(resolve('config/babelrc.js'));
const babelPath = write(process.cwd(), '.babelrc', JSON.stringify(babelrc));

const result = spawn('jest', [
  '--config', configPath,
], harmony);

// Delete created `.babelrc`.
fs.unlinkSync(babelPath);

process.exitCode = result.status;
