'use strict';

var gulp = require('gulp');
var webpack = require('gulp-webpack');
var path = require('path');
var sync = require('run-sequence');
var serve = require('browser-sync');
var root = 'client';
var reload = function() {
  serve.reload();
};

var resolveToApp = function(glob) {
  glob = glob || '';
  return path.join(root, 'app', glob);
};

var resolveToComponents = function(glob) {
  glob = glob || '';
  return path.join(root, 'app/components', glob);
};

// map of all paths
var paths = {
  js: resolveToComponents('**/*!(.spec.js).js'),
  styl: resolveToApp('**/*.styl'),
  html: [
    resolveToApp('**/*.html'),
    path.join(root, 'index.html')
  ],
  entry: path.join(root, 'app/app.js'),
  output: root,
  blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**')
};

gulp.task('webpack', function() {
  return gulp.src('client/app.js')
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest('client/'));
});

gulp.task('serve', function() {
  serve({
    port: process.env.PORT || 3000,
    open: false,
    server: {baseDir: 'client/'}
  });
});

gulp.task('watch', function() {
  var allPaths = [].concat([paths.js], paths.html, [paths.styl]);
  gulp.watch(allPaths, ['webpack', reload]);
});

gulp.task('default', function(done) {
  sync('webpack', 'serve', 'watch', done);
});
