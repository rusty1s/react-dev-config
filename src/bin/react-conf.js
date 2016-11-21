#!/usr/bin/env node

import spawn from 'cross-spawn';
import clc from 'cli-color';

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
    console.log(clc.red(`Unknown script name "${clc.bold(script)}".`));

    let log = `${clc.underline('Supported scripts:')} `;
    ['install', 'build', 'start', 'lint', 'test'].forEach(s => {
      log += `${clc.green(s)}, `;
    });
    console.log(log.slice(0, -2));

    process.exit(1);
}
