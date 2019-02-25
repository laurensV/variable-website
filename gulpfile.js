'use strict';
 
var Gulp = require('gulp');
var sass = require('gulp-sass');
 
Gulp.task('sass', function () {
 return Gulp.src('./sass/**/*.scss')
 .pipe(sass().on('error', sass.logError))
 .pipe(Gulp.dest('./css'));
});
 
Gulp.task('sass:watch', function () {
 Gulp.watch('./sass/**/*.scss', ['sass']);
});
