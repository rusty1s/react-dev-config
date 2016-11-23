#!/usr/bin/env node

const spawn = require('../utils/spawn');
const configPath = require('../utils/config-path');

const result = spawn('stylelint', [
  '--config', `${configPath}/.stylelintrc`,
  '--ignore-path', `${configPath}/.stylelintignore`,
  '**/*.css',
  '**/*.scss',
]);

process.exit(result.status);
