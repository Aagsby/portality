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
		  io.emit('new_user',socket.client.conn.id);
		  socket.on('move', function(msg){
		  	msg.id = socket.client.conn.id;
			  io.emit('move',msg);
			});
		  socket.on('disconnect', function() {
		  	io.emit('user_gone',socket.client.conn.id);
		  });
		});
		

		var server = http.listen(5000, function(){
		  	var host = server.address().address;
			var port = server.address().port;

			console.log('Example app listening at http://%s:%s', host, port);
		});
	}

	return {
		init: init
	};

})();