var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglifyjs');

module.exports = [['clean:js:server'], function() {
	return gulp.src('app/serverJs/**/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'))
	.pipe(gulp.dest('dist'));
}];