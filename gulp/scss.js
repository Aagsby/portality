var gulp = require('gulp');
var sass = require('gulp-sass')
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

module.exports = [['clean:css'],function() {
	return gulp.src('app/scss/main.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(rename('main.min.css'))
	.pipe(gulp.dest('dist/public/'));
}];