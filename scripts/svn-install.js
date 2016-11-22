#! /usr/bin/env node

const spawn = require('cross-spawn');

const result = spawn.sync('node', [
  `${process.cwd()}/node_modules/svn-modules/bin/svn-modules-install.js`,
], { stdio: 'inherit' });

process.exit(result.status);
