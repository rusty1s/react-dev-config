#!/usr/bin/env node
'use strict';

var _crossSpawn = require('cross-spawn');

var _crossSpawn2 = _interopRequireDefault(_crossSpawn);

var _cliColor = require('cli-color');

var _cliColor2 = _interopRequireDefault(_cliColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var script = process.argv[2] || '';
var args = process.argv.slice(3);

switch (script) {
  case 'install':
  case 'build':
  case 'start':
  case 'lint':
  case 'test':
    var result = _crossSpawn2.default.sync('node', [require.resolve('../scripts/' + script)].concat(args), { stdio: 'inherit' });

    process.exit(result.status);

  default:
    console.log(_cliColor2.default.red('Unknown script name "' + _cliColor2.default.bold(script) + '".'));

    var log = _cliColor2.default.underline('Supported scripts:') + ' ';
    ['install', 'build', 'start', 'lint', 'test'].forEach(function (s) {
      log += _cliColor2.default.green(s) + ', ';
    });
    console.log(log.slice(0, -2));

    process.exit(1);
}