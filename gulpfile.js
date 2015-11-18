var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var clean = require('gulp-clean');

var sass = require('gulp-sass')
var minifyCss = require('gulp-minify-css');

var jshint = require('gulp-jshint');
var uglify = require('gulp-uglifyjs');

gulp.task('default', ['clean', 'scss', 'js', 'imagemin'], function() {
	greet();
	gulp.watch('app/scss/**/*.scss', ['scss']);
	gulp.watch('app/js/**/*.js', ['js']);
});

gulp.task('build', ['clean', 'build-js', 'build-scss', 'imagemin']);

gulp.task('scss', function() {
	gulp.src('app/scss/main.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('dist/css'));
});

gulp.task('js', function() {
	gulp.src('app/js/**/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'))
	.pipe(uglify('app.min.js', {
		mangle: false,
		output: {
			beautify: true
		}
	}).on('error', function(){}))
	.pipe(gulp.dest('dist/js'));
});

gulp.task('build-js', function() {
	gulp.src('app/js/**/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'))
	.pipe(uglify().on('error', gutil.log))
	.pipe(gulp.dest('dist/js/main.css'));
});

gulp.task('build-scss', function() {
	gulp.src('app/scss/main.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(minifyCss({compatibility: 'ie9'}))
	.pipe(gulp.dest('dist/css/main.css'));
});

gulp.task('imagemin', function() {
	return gulp.src('app/images/*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/images'));
});

gulp.task('clean-js', function() {
	return gulp.src('dist/*.js', {read: false})
	.pipe(clean());
});

gulp.task('clean-css', function() {
	return gulp.src('dist/*.css', {read: false})
	.pipe(clean());
});

gulp.task('clean-images', function() {
	return gulp.src(['dist/*.jpg','dist/*.png','dist/*.gif','dist/*.svg'], {read: false})
	.pipe(clean());
});

gulp.task('clean-html', function() {
	return gulp.src('dist/*.html', {read: false})
	.pipe(clean());
});

gulp.task('clean',['clean-js','clean-css','clean-images','clean-html']);





function greet() {
	var greetings = [
		'Thank you for coding today!',
		'You look lovely today!',
		'Code means live.',
		'Never stop coding!',
		'Strive for excellence!',
		'Today feels like a good day.',
		'Studies show: Coding produces Code! And Happiness!'
	];
	var msg = greetings[Math.floor(Math.random()*greetings.length)];
	var num = (msg.length + 10);
	console.log('');
	console.log(' ' + Array(num).join('-'));
	console.log('');
	console.log(' ' + Array(5).join(' ') + msg);
	console.log('');
	console.log(' ' + Array(num).join('-'));
	console.log('');
}