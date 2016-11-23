#!/usr/bin/env node

const spawn = require('cross-spawn');
const moduleName = require('../config/name');

const path = `${process.cwd()}/node_modules/${moduleName}/config`;

const result = spawn.sync('node', [
  `${process.cwd()}/node_modules/.bin/eslint`,
  '--config', `${path}/.eslintrc`,
  '--ignore-path', `${path}/.eslintignore`,
  '--ext', '.js,.jsx',
  '--fix',
  '.',
], { stdio: 'inherit' });

process.exit(result.status);
