var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

module.exports = [['clean:img'],function() {
	return gulp.src('app/images/*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/public/images'));
}];