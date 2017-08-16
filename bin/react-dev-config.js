#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const spawn = require('cross-spawn');
const chalk = require('chalk');

const log = require('../utils/log');

const script = process.argv[2] || '';
const args = process.argv.slice(3);

// Read the scripts folder to build the available script names.
const scripts = fs.readdirSync(path.join(__dirname, '../scripts'))
  .map(filename => filename.replace(/\..+$/, ''))
  .sort();

if (scripts.indexOf(script) >= 0) {
  // Call the passed script as a child process.
  const result = spawn.sync('node',
    [require.resolve(`../scripts/${script}.js`)].concat(args),
  { stdio: 'inherit' });

  process.exitCode = result.status;
} else {
  // Display error message.
  log.error(`Unknown script "${chalk.red.bold(script)}".`);
  log.text(`Supported scripts: ${scripts.map(s => chalk.green(s)).join(', ')}`);

  process.exitCode = 1;
}
