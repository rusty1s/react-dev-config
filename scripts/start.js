#!/usr/bin/env node

const spawn = require('../utils/spawn');
const configPath = require('../utils/structure').configPath;

const result = spawn('webpack-dev-server', [
  '--config', `${configPath}/webpack.dev.config.js`,
  '--host', '0.0.0.0',  // bind to all hosts
  '--port', '3000',
  '--hot',    // switch the server to hot mode
  '--inline', // embed the webpack-dev-server runtime into the bundle
  '--open',   // open the url in default browser
]);

process.exitCode = result.status;
