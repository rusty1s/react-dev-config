#!/usr/bin/env node

const spawn = require('../utils/spawn');
const { configPath } = require('../utils/structure');

const result = spawn('stylelint', [
  '--config', `${configPath}/stylelintrc`,
  '--ignore-path', `${configPath}/stylelintignore`,
  '**/*.css',
  '**/*.scss',
]);

process.exitCode = result.status;
