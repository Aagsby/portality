var CA = CA || {};

/*
  * This Module provides an Interface for the socket.io interaction.
  * It exists for the sole purpose of abstracting the process of sending
  * and receiving data, so changing the system from socket.io to
  * another technology is easier if necessary.
*/

CA.Sync = (function() {

  var socket = null;

  function init(skt) {
    socket = skt;
  }

  function send(tag, data) {
    if(socket) {
      socket.emit(tag, data);
    }
  }

  function listen(tag, callback) {
    if(socket) {
      socket.on(tag,callback);
    }
  }

  return {
    init: init,
    send: send,
    listen: listen
  };

})();