#!/usr/bin/env node

const meow = require('meow');

const log = require('../utils/log');
const chalk = require('chalk');
const spawn = require('../utils/spawn');

const operations = ['install', 'uninstall'];
const operation = process.argv[2] || '';

if (operations.indexOf(operation) < 0) {
  log.error(`Unknown operation "${chalk.red.bold(operation)}" for "svn".`);
  const logOperations = operations.map(op => chalk.green(op)).join(', ');
  log.text(`Supported operations: ${logOperations}`);

  process.exitCode = 1;
} else {
  meow(`
Usage
  svn <operation> [options]

Operation
  Either 'install' or 'uninstall'.

Options
  --help   This help text.
`);

  // Install found svn modules (if any) with no additional arguments.
  const result = spawn('svn-modules', [operation]);

  process.exitCode = result.status;
}
