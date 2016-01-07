module.exports = (function() {

	var express = require('express');
	var app = express();
	var http = require('http').Server(app);
	var io = require('socket.io')(http);
	var path = require('path');

	function init() {
		app.get('/', function (req, res) {
			res.sendFile(path.join(GLOBAL.htmlPath + '/landingPage.html'));
		});

		app.use(express.static(__dirname + '/../public'));
		console.log(__dirname + '/../public');

		io.on('connection', function(socket){
		  console.log('a user connected');
		});

		var server = http.listen(3000, function(){
		  	var host = server.address().address;
			var port = server.address().port;

			console.log('Example app listening at http://%s:%s', host, port);
		});
	}

	return {
		init: init
	};

})();