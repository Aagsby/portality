module.exports = (function() {

	var express = require('express');
	var app = express();
	var path = require('path');

	function init() {
		app.get('/', function (req, res) {
			res.sendFile(path.join(GLOBAL.htmlPath + '/landingPage.html'));
		});

		app.use(express.static(__dirname + '/../public'));
		console.log(__dirname + '/../public');

		var server = app.listen(3000, function () {
			var host = server.address().address;
			var port = server.address().port;

			console.log('Example app listening at http://%s:%s', host, port);
		});
	}

	return {
		init: init
	};

})();