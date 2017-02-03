#!/usr/bin/env node

const meow = require('meow');

const spawn = require('../utils/spawn');

const cli = meow(`
Usage
  svn <operation> [options]

Operation
  Either 'install' or 'uninstall'.

Options
  --help   This help text.
`);

// Install found svn modules (if any) with no additional arguments.
const result = spawn('svn-modules', [cli.input[0]]);

process.exitCode = result.status;
