module.exports = [
  require('postcss-import')(),
  require('postcss-cssnext')(),
  require('postcss-font-magician')({
    protocol: 'https:',
  }),
];
