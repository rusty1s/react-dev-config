#!/usr/bin/env node

const spawn = require('../utils/spawn');

const result = resultspawn('svn-modules-uninstall');

process.exitCode = result.status;
