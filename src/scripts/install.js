#!/usr/bin/env node

import spawn from 'cross-spawn';

const args = process.argv.slice(2);

// const result = spawn.sync(
//   '../../node_modules/babel-cli/bin/babel.js',
//   ["const lol = 10;"],
//   { stdio: 'inherit' }
// );

// console.log(result);
// process.exit(result.status);
