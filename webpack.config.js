const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: './bundle.js',
    path: '/dist',
  },
  devServer: {
    contentBase: './dist',
    watchContentBase: true,
    port: 3000,
    host: '127.0.0.1',
    open: true,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
};
