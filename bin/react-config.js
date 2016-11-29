#!/usr/bin/env node

const spawn = require('cross-spawn');
const chalk = require('chalk');

const moduleName = require('../utils/structure').moduleName;

const script = process.argv[2] || '';
const args = process.argv.slice(3);

const scripts = [
  'build',
  'start',
  'lint-scripts',
  'lint-styles',
  'test',
  'svn-install',
  'svn-uninstall',
];

if (scripts.indexOf(script) >= 0) {
  const result = spawn.sync('node',
    [require.resolve(`../scripts/${script}`)].concat(args),
  { stdio: 'inherit' });

  process.exitCode = result.status;
} else {
  process.stdout.write(chalk.gray(`${moduleName}`));
  process.stdout.write(' ');
  process.stdout.write(chalk.bgRed('ERROR'));
  process.stdout.write(` Unknown script "${chalk.red.bold(script)}".`);
  process.stdout.write('\n');
  process.stdout.write(chalk.gray(`${moduleName}`));
  process.stdout.write(' ');
  process.stdout.write('Supported scripts: ');
  process.stdout.write(scripts.map(s => chalk.green(s)).join(', '));
  process.stdout.write('\n');

  process.exitCode = 1;
}
