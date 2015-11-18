var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglifyjs');

module.exports = [['clean:js:client'], function() {
	return gulp.src('app/clientJs/**/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'))
	.pipe(uglify('main.min.js', {
		mangle: false,
		output: {
			beautify: true
		}
	}).on('error', function(){}))
	.pipe(gulp.dest('dist/public'));
}];