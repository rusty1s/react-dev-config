#!/usr/bin/env node

const spawn = require('../utils/spawn');

const result = spawn('svn-modules-uninstall');

process.exitCode = result.status;
