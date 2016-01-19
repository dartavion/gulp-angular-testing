'use strict';

var gulp = require('gulp');
var webpack = require('gulp-webpack');
var sync = require('run-sequence');
var serve = require('browser-sync');

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

gulp.task('default', function(done) {
  sync('webpack', 'serve', done);
});
