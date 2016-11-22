#!/usr/bin/env node

const spawn = require('cross-spawn');

const path = `${process.cwd()}/node_modules/helic-react-config/config`;

const result = spawn.sync('node', [
  `${process.cwd()}/node_modules/.bin/eslint`,
  '--config', `${path}/.eslintrc`,
  '--ignore-path', `${path}/.eslintignore`,
  '--ext', '.js,.jsx',
  '--fix',
  '.',
], { stdio: 'inherit' });

process.exit(result.status);
