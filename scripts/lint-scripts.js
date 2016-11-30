#!/usr/bin/env node

const spawn = require('../utils/spawn');
const configPath = require('../utils/structure').configPath;

const result = spawn('eslint', [
  '--config', `${configPath}/eslintrc`,
  '--ignore-path', `${configPath}/eslintignore`,
  '--ext', '.js',
  '--ext', '.jsx',
  '--fix',
  '--cache',
  '.',
]);

process.exitCode = result.status;
