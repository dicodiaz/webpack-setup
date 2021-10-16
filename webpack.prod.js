const { merge } = require('webpack-merge'); // eslint-disable-line import/no-extraneous-dependencies
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
