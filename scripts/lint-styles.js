#!/usr/bin/env node

const spawn = require('../utils/spawn');
const configPath = require('../utils/config-path');

spawn('stylelint', [
  '--config', `${configPath}/.stylelintrc`,
  '--ignore-path', `${configPath}/.stylelintignore`,
  '**/*.css',
  '**/*.scss',
]);
