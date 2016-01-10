module.exports = (function() {

  var express = require('express');
  var app = express();
  var http = require('http').Server(app);
  var io = require('socket.io')(http);
  var path = require('path');
  var sync = require('./sync.js');
  sync.init(io);

  function init() {
    app.get('/', function (req, res) {
      res.sendFile(path.join(GLOBAL.htmlPath + '/landingPage.html'));
    });

    app.use(express.static(__dirname + '/../public'));

    sync.listen('connection', function(socket){
      sync.broadcast('new_user',socket.client.conn.id);

      sync.listenToSocket(socket, 'move', function(msg){
        msg.id = socket.client.conn.id;
        io.emit('move',msg);
      });

      sync.listenToSocket(socket, 'disconnect', function() {
        io.emit('user_gone',socket.client.conn.id);
      });
    });

    var server = http.listen(5000, function(){
      var host = server.address().address;
      var port = server.address().port;

      console.log('ChillAid App listening at http://%s:%s', host, port);
    });
  }

  return {
    init: init
  };

})();