#!/usr/bin/env node

const meow = require('meow');

const spawn = require('../utils/spawn');

meow(`
Usage
  svn-install

Options
  --help   This help text.
`);

const args = [
  'install',
];

// Install found svn modules (if any) with no additional arguments.
const result = spawn('svn-modules', args);

process.exitCode = result.status;
