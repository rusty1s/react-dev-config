#!/usr/bin/env node

var argv = require('yargs')
  .usage('Usage: $0 --css [bool] --js [bool]')
  .argv;

console.log(argv)

// exclude node_modules
// jsx und js
// css und scss
// kein min!
