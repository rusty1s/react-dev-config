#!/usr/bin/env node

const spawn = require('../utils/spawn');
const { configPath } = require('../utils/structure');

const result = spawn('webpack-dev-server', [
  '--config', `${configPath}/webpack.config.dev.js`,
  '--host', '0.0.0.0',  // bind to all hosts
  '--hot',    // switch the server to hot mode
  '--inline', // embed the webpack-dev-server runtime into the bundle
  '--open',   // open the url in default browser
]);

process.exitCode = result.status;
