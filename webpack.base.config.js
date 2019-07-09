const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.peanut$/,
        use: [
          './loader/uppercase-loader.js',
          './loader/reverse-loader.js',
        ],
      },
    ]
  },
  devtool: 'inline-source-map',
}