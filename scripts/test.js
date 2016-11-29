#!/usr/bin/env node

const chalk = require('chalk');

const { moduleName } = require('../utils/structure');

process.stdout.write(chalk.gray(`${moduleName}`));
process.stdout.write(' ');
process.stdout.write(chalk.bgRed('ERROR'));
process.stdout.write(' Test script not implemented yet.');
process.stdout.write('\n');

process.exitCode = 1;
