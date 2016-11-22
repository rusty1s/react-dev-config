#! /usr/bin/env node

const spawn = require('cross-spawn');

const result = spawn.sync('node', [
  `${process.cwd()}/node_modules/.bin/svn-modules-uninstall`,
], { stdio: 'inherit' });

process.exit(result.status);
