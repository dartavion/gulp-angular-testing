'use strict';

module.exports = {
  devtool: 'sourcemap',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!raw'},
      {test: /\.html$/, loader: 'raw'}
    ]
  }
};
