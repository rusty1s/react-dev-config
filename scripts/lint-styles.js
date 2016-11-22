#!/usr/bin/env node

const spawn = require('cross-spawn');

const name = require('../package.json').name;
const path = `${process.cwd()}/node_modules/${name}/config`;

const result = spawn.sync('node', [
  `${process.cwd()}/node_modules/.bin/stylelint`,
  '--config', `${path}/.stylelintrc`,
  '--ignore-path', `${path}/.stylelintignore`,
  '**/*.css',
  '**/*.scss',
], { stdio: 'inherit' });

process.exit(result.status);
