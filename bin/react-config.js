#!/usr/bin/env node

const spawn = require('cross-spawn');
const chalk = require('chalk');

const script = process.argv[2] || '';
const args = process.argv.slice(3);

const MODULE_NAME = 'helic-react-config';
const scripts = [
  'build',
  'start',
  'lint-scripts',
  'lint-styles',
  // 'test',
  'svn-install',
  'svn-uninstall',
];

if (scripts.indexOf(script) >= 0) {
  const result = spawn.sync('node',
    [require.resolve(`../scripts/${script}`)].concat(args),
  { stdio: 'inherit' });

  process.exitCode(result.status);
} else {
  process.stdout.write(chalk.underline(`${MODULE_NAME}:\n`));
  process.stdout.write(chalk.bgRed('ERROR'));
  process.stdout.write(` Unknown script "${chalk.red.bold(script)}".\n`);
  process.stdout.write('Supported scripts: ');
  process.stdout.write(scripts.map(s => chalk.green(s)).join(', '));
  process.stdout.write('\n');

  process.exitCode = 1;
}
