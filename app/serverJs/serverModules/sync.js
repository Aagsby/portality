module.exports = (function() {

  var io = null;

  function init(socketIo) {
    io = socketIo;
  }

  function broadcast(tag, data) {
    io.emit(tag, data);
  }

  function listen(tag, callback) {
    io.on(tag, callback);
  }

  function listenToSocket(socket, tag, callback) {
    socket.on(tag, callback);
  }

  return {
    init: init,
    broadcast: broadcast,
    listen: listen,
    listenToSocket: listenToSocket
  };

})();