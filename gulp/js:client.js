var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglifyjs');

module.exports = [['clean:js:client'], function() {
	return gulp.src(['app/clientJs/**/*.js','node_modules/socket.io/node_modules/socket.io-client/socket.io.js'])
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