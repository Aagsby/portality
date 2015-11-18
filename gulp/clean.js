var gulp = require('gulp');
var del = require('del');

gulp.task('clean:js:server',function() {
	return del(['dist/server.js','dist/serverModules']);
});

gulp.task('clean:js:client',function() {
	return del(['dist/public/main.min.js']);
});

gulp.task('clean:js',['clean:js:server','clean:js:client']);

gulp.task('clean:css',function() {
	return del(['dist/public/main.min.css']);
});

gulp.task('clean:html',function() {
	return del(['dist/html']);
});

gulp.task('clean:img',function() {
	return del(['dist/public/images']);
});

module.exports = [['clean:js','clean:css','clean:img','clean:html']];