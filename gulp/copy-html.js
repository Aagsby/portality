var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

module.exports = [['clean:html'],function() {
	return gulp.src('app/html/*')
	.pipe(gulp.dest('dist/html'));
}];