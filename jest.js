const fs = require('fs');
const path = require('path');

let transform = path.join(process.cwd(), 'node_modules', 'jest-css-modules');
if (fs.existsSync(transform)) {
  transform = '<rootDir>/node_modules/jest-css-modules';
} else {
  transform = '<rootDir>/node_modules/react-dev-config/node_modules/jest-css-modules';
}

module.exports = {
  collectCoverage: true,
  transform: {
    '.*': transform,
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/node_modules/react-dev-config/__mocks__/files.js',
    '\\.css$': 'identity-obj-proxy',
  },
};
