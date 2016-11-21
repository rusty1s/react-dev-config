#!/usr/bin/env node

const spawn = require('cross-spawn');
const clc = require('cli-color');

const script = process.argv[2] || '';
const args = process.argv.slice(3);

switch (script) {
  case 'install':
  case 'build':
  case 'start':
  case 'lint':
  case 'test':
    const result = spawn.sync(
      'node',
      [require.resolve(`../scripts/${script}`)].concat(args),
      { stdio: 'inherit' }
    );

    process.exit(result.status);

  default:
    const scripts = ['install', 'build', 'start', 'lint', 'test'];

    console.log(clc.red(`Unknown name "${clc.bold(script)}".`));
    process.stdout.write(`${clc.underline('Supported scripts:')} `);
    console.log(scripts.map(s => clc.green(s)).join(', '));

    process.exit(1);
}
