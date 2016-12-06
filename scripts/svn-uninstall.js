#!/usr/bin/env node

const meow = require('meow');

const spawn = require('../utils/spawn');

meow(`
Usage
  svn-uninstall

Options
  --help   This help text.
`);

// Uninstall found svn modules (if any) with no additional arguments.
const result = spawn('svn-modules', ['uninstall']);

process.exitCode = result.status;
