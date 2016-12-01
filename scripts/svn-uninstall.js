#!/usr/bin/env node

const spawn = require('../utils/spawn');

// Uninstall found svn modules (if any) with no additional arguments.
const result = spawn('svn-modules-uninstall');

process.exitCode = result.status;
