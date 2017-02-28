#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const meow = require('meow');

const spawn = require('../utils/spawn');
const resolve = require('../utils/resolve');

// Babel needs a `.babelrc` in the root of your package folder, so we write it.
const babelrc = require(resolve('babelrc.js'));
const babelrcPath = path.join(process.cwd(), '.babelrc');
fs.writeFileSync(babelrcPath, JSON.stringify(babelrc));

const cli = meow(`
Usage
  transpile <input> [options]

Input
  Either a file or a directory.

Options
  --output  output directory
  --help    This help text.
`);

const args = [
  cli.input[0] || 'src',
].concat(cli.flags.output ? ['--out-dir', cli.flags.output] : ['--out-dir', 'dist']);

// Run webpack for building the bundle for use in production.
const result = spawn('babel-cli', args, null, 'babel');

// Delete created `.babelrc`.
fs.unlinkSync(babelrcPath);

process.exitCode = result.status;
