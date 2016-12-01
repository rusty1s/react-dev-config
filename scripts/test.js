#!/usr/bin/env node

const spawn = require('../utils/spawn');
const nodeVersion = require('../utils/structure').nodeMajorVersion;
const configPath = require('../utils/structure').configPath;

// Proxy is enabled in Node.js v6.* by default; if you are not on Node v6.* 
// yet, make sure you invoke Jest using node --harmony_proxies
// https://facebook.github.io/jest/docs/tutorial-webpack.html
const nodeConfig = nodeVersion < 6 ? [ '--harmony_proxies' ] || [];

const result = spawn('jest', [
  '--config', `${configPath}/jest.config.json`,
  '--coverage',
], nodeConfig);

process.exitCode = result.status;
