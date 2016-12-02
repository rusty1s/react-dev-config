module.exports = {
  extends: 'airbnb',
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.config.js', '**/*.test.js', '**/*.spec.js'] },
    ],
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
