// this config is only for IDE to use absolute path

// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '~': path.resolve(__dirname),
    },
    extensions: ['*', '.js', '.ts', '.jsx', '.vue', '.json', '.scss'],
  },
};
