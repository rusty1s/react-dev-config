#!/usr/bin/env node

const spawn = require('../utils/spawn');

// Install found svn modules (if any) with no additional arguments.
const result = spawn('svn-modules-install');

process.exitCode = result.status;
