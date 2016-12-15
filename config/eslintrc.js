module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    // Allow importing dev dependencies only in config or test files.
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: [
          '**/config/**/*',
          '**/test/**/*',
          '**/spec/**/*',
          '**/*.config.*',
          '**/*.test.*',
          '**/*.spec.*',
        ],
      },
    ],
    // Allow dynamic requires at runtime.
    'import/no-dynamic-require': 0,
    // Allow requires everywhere in the code.
    'global-require': 0,
    // Allow `.bind()` in JSX properties to use the bind operator `::`.
    'react/jsx-no-bind': 0,
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
};
