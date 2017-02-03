#!/usr/bin/env node

const meow = require('meow');
const chalk = require('chalk');

const spawn = require('../utils/spawn');
const resolve = require('../utils/resolve');
const write = require('../utils/write');
const log = require('../utils/log');

const cli = meow(`
Usage
  lint <operation> [options]

Operation
  Either 'js' or 'css'.

Options
  --help  This help text.
  --fix   Automatically fix problems (only available for lint js).
`);

switch (cli.input[0]) {
  case 'js': {
    // The `eslintignore` file must be a simple file with entries in each row
    // just like the normal `.gitignore`. We write this file into the .cache
    // folder of the `react-dev-config` from where we can address it.
    const ignore = require(resolve('eslintignore.js'));
    const ignorePath = write.ignoreToCache('eslintignore', ignore);

    const args = [
      '--config', resolve('eslintrc.js'),
      '--ignore-path', ignorePath,
      '--ext', '.js',
      '--ext', '.jsx',
      '--cache',
    ].concat(cli.flags.fix ? ['--fix'] : []).concat(['.']);

    // Lint all js files with eslint.
    const result = spawn('eslint', args);

    process.exitCode = result.status;
    break;
  }
  case 'css': {
    // The `stylelintignore` file must be a simple file with entries in each
    // row just like the normal `.gitignore`. We write this file into the
    // .cache folder of the `react-dev-config` from where we can address it.
    const ignore = require(resolve('stylelintignore.js'));
    const ignorePath = write.ignoreToCache('stylelintignore', ignore);

    const args = [
      '--config', resolve('stylelintrc.js'),
      '--ignore-path', ignorePath,
      '--allow-empty-input',
      '**/*.css',
    ];

    // Lint all css files with stylelint.
    const result = spawn('stylelint', args);

    process.exitCode = result.status;
    break;
  }
  default: {
    log.error(`Unknown operation "${chalk.red.bold(cli.input[0])}".`);
    log.text(`Supported operations: ${
      ['js', 'css'].map(s => chalk.green(s)).join(', ')
    }`);

    process.exitCode = 1;
  }
}
