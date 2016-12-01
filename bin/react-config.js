#!/usr/bin/env node

const fs = require('fs');
const spawn = require('cross-spawn');
const chalk = require('chalk');

const name = require('../package.json').name;
const resolveFromBaseDir = require('../utils/resolve-from-basedir');

const script = process.argv[2] || '';
const args = process.argv.slice(3);

// Read the scripts folder to build the available script names.
const scripts = fs.readdirSync(resolveFromBaseDir('scripts'))
  .map(filename => filename.replace(/\..*$/, ''))
  .sort();

if (scripts.indexOf(script) >= 0) {
  // Call the found script as a child process.
  const result = spawn.sync('node',
    [resolveFromBaseDir(`scripts/${script}.js`)].concat(args),
  { stdio: 'inherit' });

  process.exitCode = result.status;
} else {
  // Display error message.
  process.stdout.write(chalk.gray(`${name}`));
  process.stdout.write(' ');
  process.stdout.write(chalk.bgRed('ERROR'));
  process.stdout.write(` Unknown script "${chalk.red.bold(script)}".`);
  process.stdout.write('\n');
  process.stdout.write(chalk.gray(`${name}`));
  process.stdout.write(' ');
  process.stdout.write('Supported scripts: ');
  process.stdout.write(scripts.map(script => chalk.green(script)).join(', '));
  process.stdout.write('\n');

  process.exitCode = 1;
}
