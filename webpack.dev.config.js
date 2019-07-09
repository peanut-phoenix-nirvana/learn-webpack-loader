const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');

module.exports = webpackMerge(webpackBaseConfig, {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 8080,
    open: true,
  },
});