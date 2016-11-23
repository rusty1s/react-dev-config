#!/usr/bin/env node

const spawn = require('cross-spawn');
const moduleName = require('../utils/name');

const path = `${process.cwd()}/node_modules/${moduleName}/config`;

const result = spawn.sync('node', [
  `${process.cwd()}/node_modules/.bin/stylelint`,
  '--config', `${path}/.stylelintrc`,
  '--ignore-path', `${path}/.stylelintignore`,
  '**/*.css',
  '**/*.scss',
], { stdio: 'inherit' });

process.exit(result.status);
