#!/usr/bin/env node
'use strict';

var _crossSpawn = require('cross-spawn');

var _crossSpawn2 = _interopRequireDefault(_crossSpawn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var args = process.argv.slice(2);

// const result = spawn.sync(
//   '../../node_modules/babel-cli/bin/babel.js',
//   ["const lol = 10;"],
//   { stdio: 'inherit' }
// );

// console.log(result);
// process.exit(result.status);