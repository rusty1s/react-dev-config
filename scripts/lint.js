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
    const ignoreJS = require(resolve('eslintignore.js'));
    const ignoreJSPath = write.ignoreToCache('eslintignore', ignoreJS);

    const eslintArgs = [
      '--config', resolve('eslintrc.js'),
      '--ignore-path', ignoreJSPath,
      '--ext', '.js',
      '--ext', '.jsx',
      '--cache',
    ].concat(cli.flags.fix ? ['--fix'] : []).concat(['.']);

    // Lint all js files with eslint.
    const eslintResult = spawn('eslint', eslintArgs);

    process.exitCode = eslintResult.status;
    break;
  }
  case 'css': {
    // The `stylelintignore` file must be a simple file with entries in each
    // row just like the normal `.gitignore`. We write this file into the
    // .cache folder of the `react-dev-config` from where we can address it.
    const ignoreCSS = require(resolve('stylelintignore.js'));
    const ignoreCSSPath = write.ignoreToCache('stylelintignore', ignoreCSS);

    const stylelintArgs = [
      '--config', resolve('stylelintrc.js'),
      '--ignore-path', ignoreCSSPath,
      '--allow-empty-input',
      '**/*.css',
    ];

    // Lint all css files with stylelint.
    const stylelintResult = spawn('stylelint', stylelintArgs);

    process.exitCode = stylelintResult.status;
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
