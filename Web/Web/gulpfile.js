/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
     .pipe(sourcemaps.init())
     .pipe(sass().on('error', sass.logError))
     .pipe(sourcemaps.write('./maps'))
     .pipe(gulp.dest('./css/site.css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});


gulp.task('default', function () {
    // place code for your default task here
});