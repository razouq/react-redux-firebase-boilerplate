const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@elements': path.resolve(__dirname, 'src/elements/'),
      '@store': path.resolve(__dirname, 'src/store/'),
    },
  },
};
