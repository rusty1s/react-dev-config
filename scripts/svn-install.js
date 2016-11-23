#!/usr/bin/env node

const spawn = require('../utils/spawn');

const result = spawn('svn-modules-install');

process.exit(result.status);
