#!/usr/bin/env node

const spawn = require('cross-spawn');
const clc = require('cli-color');

const script = process.argv[2] || '';
const args = process.argv.slice(3);

const scripts = [
  'install',
  'build',
  'start',
  'lint-scripts',
  'lint-styles',
  'test',
];

if (scripts.includes(script)) {
  const result = spawn.sync('node',
    [require.resolve(`../scripts/${script}`)].concat(args),
  { stdio: 'inherit' });

  process.exit(result.status);
} else {
  process.stdout.write(clc.red(`Unknown name "${clc.bold(script)}".\n`));
  process.stdout.write(`${clc.underline('Supported scripts:')} `);
  process.stdout.write(scripts.map(s => clc.green(s)).join(', '));
  process.stdout.write('\n');

  process.exit(1);
}
