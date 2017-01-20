module.exports = [
  require('postcss-cssnext')(),
  require('postcss-font-magician')({
    protocal: 'https:',
  }),
];
