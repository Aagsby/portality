var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglifyjs');
var addsrc = require('gulp-add-src');

module.exports = [['clean:js:client'], function() {
	return gulp.src(['app/clientJs/**/*.js','!app/clientJS/main.js'])
  .pipe(addsrc('app/clientJS/main.js'))
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'))
  .pipe(addsrc('node_modules/socket.io/node_modules/socket.io-client/socket.io.js'))
	.pipe(uglify('main.min.js').on('error', gutil.log))
	.pipe(gulp.dest('dist/public'));
}];