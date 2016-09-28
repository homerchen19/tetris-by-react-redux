'use strict';

const webpack = require('webpack');
const path = require('path');
const APP_DIR = './src/';
const BUILD_DIR = './dist/';

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8008',
    path.resolve(APP_DIR, 'app.js')
  ],
  output: {
    path: path.resolve(__dirname, BUILD_DIR),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, 'src'),
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass?sourceMap',
    }],
  },
  resolve: {
    extensions: ['', '.js', '.scss'],
  },
  devtool: 'eval',
  devServer: {
    inline: true,
    port: 8008,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
