'use strict'

var gulp = require('gulp')
var $ = require('gulp-load-plugins')()

gulp.task('test', () => {
  return gulp
    .src(['test/**/*_test.js'], {read: false})
    .pipe($.mocha())
    .once('end', () => process.exit())
})

gulp.task('default', ['test'])
