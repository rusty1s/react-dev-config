module.exports = [
  require('postcss-cssnext')(),
  require('postcss-font-magician')({
    protocol: 'https:',
  }),
];
