var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglifyjs');

module.exports = [['clean:js:client'], function() {
	return gulp.src(['app/clientJs/**/*.js','node_modules/socket.io/node_modules/socket.io-client/socket.io.js'])
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'))
	.pipe(uglify('main.min.js').on('error', gutil.log))
	.pipe(gulp.dest('dist/public'));
}];