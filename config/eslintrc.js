module.exports = {
  extends: 'airbnb',
  rules: {
    'import/no-extraneous-dependencies': [
      2,
      { devDependencies: ['**/*.config.js', '**/*.test.js', '**/*.spec.js'] },
    ],
    'import/no-dynamic-require': 0,
    'no-param-reassign': [
      2,
      { props: false },
    ],
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
};
