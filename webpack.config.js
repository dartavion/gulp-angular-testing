'use strict';

module.exports = {
  devtool: 'sourcemap',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate'},
      {test: /\.less$/, loader: 'style!css!less'},
      {test: /\.html$/, loader: 'raw'}
    ]
  }
};
