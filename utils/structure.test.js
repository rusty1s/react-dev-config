const fs = require('fs');

const structure = require('../utils/structure.js');

test('should export correct data', () => {
  const name = 'helic-react-config';
  const config = `${process.cwd()}/node_modules/${name}/config`;

  expect(structure.moduleName).toBe(name);
  expect(structure.configPath).toBe(config);
});

test('should find all config files in the config folder', () => {
  const files = [
    'eslintrc',
    'eslintignore',
    'stylelintrc',
    'stylelintignore',
    'webpack.dev.config.js',
    'webpack.prod.config.js',
    'postcss.config.js',
    'jest',
  ];

  const configPath = `${process.cwd()}/config`;
  expect(fs.existsSync(configPath)).toBeTruthy();

  // check if we only find the files listed above
  expect(fs.readdirSync(configPath)).toHaveLength(files.length);

  files.forEach((file) => {
    expect(fs.existsSync(`${configPath}/${file}`)).toBeTruthy();
  });
});

test('should find all config files in the root folder', () => {
  const files = [
    '.babelrc',
  ];

  expect(fs.existsSync(process.cwd())).toBeTruthy();

  files.forEach((file) => {
    expect(fs.existsSync(`${process.cwd()}/${file}`)).toBeTruthy();
  });
});
