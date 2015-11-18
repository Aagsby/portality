var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

module.exports = function() {
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
}