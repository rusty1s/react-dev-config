const expect = require('chai').expect;
const fs = require('fs');

const structure = require('../utils/structure.js');

describe('Structure', () => {
  it('should export correct data', () => {
    const name = 'helic-react-config';
    const config = `${process.cwd()}/node_modules/${name}/config`;

    expect(structure.moduleName).to.equal(name);
    expect(structure.configPath).to.equal(config);
  });

  it('should find all config files in the config folder', () => {
    const files = [
      'eslintrc',
      'eslintignore',
      'stylelintrc',
      'stylelintignore',
      'webpack.dev.config.js',
      'webpack.prod.config.js',
    ];

    const configPath = `${process.cwd()}/config`;
    expect(fs.existsSync(configPath)).to.equal(true);

    // check if we only find the files listed above
    expect(fs.readdirSync(configPath).length).to.be.equal(files.length);

    files.forEach((file) => {
      expect(fs.existsSync(`${configPath}/${file}`)).to.equal(true);
    });
  });

  it('should find all config files in the root folder', () => {
    const files = [
      '.babelrc',
      'postcss.config.js',
    ];

    const configPath = process.cwd();
    expect(fs.existsSync(configPath)).to.equal(true);

    files.forEach((file) => {
      expect(fs.existsSync(`${configPath}/${file}`)).to.equal(true);
    });
  });
});
