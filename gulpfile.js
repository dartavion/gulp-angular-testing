'use strict';

var gulp = require('gulp');
var webpack = require('gulp-webpack');
gulp.task('default', function() {
  return gulp.src('client/app.js')
    .pipe(webpack())
    .pipe(gulp.dest('dist/'));
});
