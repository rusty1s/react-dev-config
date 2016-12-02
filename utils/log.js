const chalk = require('chalk');

const name = require('../package.json').name;

function logText(text) {
  // Prepends the log text with a dark colored module info.
  process.stdout.write(`${chalk.gray(name)} ${text}\n`);
}

function logError(text) {
  // Prepends the log text with an uppercase error field.
  return logText(`${chalk.bgRed('ERROR')} ${text}`);
}

module.exports = {
  text: logText,
  error: logError,
};
