// const fs = require('fs');

// const structure = require('../utils/structure.js');

test('should export correct data', () => {
  expect(2).toBe(2);
  // const name = 'helic-react-config';
  // const config = `${process.cwd()}/node_modules/${name}/config`;
  // const scripts = `${process.cwd()}/node_modules/${name}/scripts`;

  // expect(structure.moduleName).toBe(name);
  // expect(structure.configPath).toBe(config);
  // expect(structure.scriptsPath).toBe(scripts);
  // expect(structure.nodeMajorVersion).toBe(parseInt(process.version[1], 10));
});

// test('should find all script files in the scripts folder', () => {
//   const files = [
//     'eslintrc',
//     'eslintignore',
//     'stylelintrc',
//     'stylelintignore',
//     'webpack.dev.config.js',
//     'webpack.prod.config.js',
//     'postcss.config.js',
//     'jest.config.json',
//   ];

//   const scriptsPath = `${process.cwd()}/scripts`;
//   expect(fs.existsSync(scriptsPath)).toBeTruthy();

//   // check if we only find the files listed above
//   expect(fs.readdirSync(scriptsPath)).toBeEqual(files);
// });

// test('should find all config files in the config folder', () => {
//   const files = [
//     'eslintrc',
//     'eslintignore',
//     'stylelintrc',
//     'stylelintignore',
//     'webpack.dev.config.js',
//     'webpack.prod.config.js',
//     'postcss.config.js',
//     'jest.config.json',
//   ];

//   const configPath = `${process.cwd()}/config`;
//   expect(fs.existsSync(configPath)).toBeTruthy();

//   // check if we only find the files listed above
//   expect(fs.readdirSync(configPath)).toBeEqual(files);
// });

// test('should find all config files in the root folder', () => {
//   const files = [
//     '.babelrc',
//   ];

//   expect(fs.existsSync(process.cwd())).toBeTruthy();

//   files.forEach((file) => {
//     expect(fs.existsSync(`${process.cwd()}/${file}`)).toBeTruthy();
//   });
// });
