#!/usr/bin/env node

const spawn = require('cross-spawn');

const result = spawn.sync('node', [
  `${process.cwd()}/node_modules/eslint/bin/eslint.js`,
  '--ext', '.js',
  '--ext', '.jsx',
  '--fix',
  '.',
], { stdio: 'inherit' });

process.exit(result.status);
