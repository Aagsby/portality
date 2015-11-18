var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
require('gulp-load-tasks')('gulp'); 

gulp.task('default', ['scss', 'js:client', 'js:server', 'imagemin', 'copy-html'], function() {
	greet();
	gulp.watch('app/scss/**/*.scss', ['scss']);
	gulp.watch('app/clientJs/**/*.js', ['js:client']);
	gulp.watch('app/serverJs/**/*.js', ['js:server']);
	gulp.watch('app/html/**/*.html', ['copy-html']);

	nodemon({ script: 'dist/server.js',
		watch: false,
		ext: false,
		tasks: false
		 })
	.on('restart', function () {
		console.log('Restarted Node Monster!')
	})
	.on('change', function () {
		console.log('Change')
	})
});

gulp.task('build', ['build-js:client', 'build-js:server', 'build-scss', 'imagemin', 'copy-html']);

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