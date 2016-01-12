module.exports = (function() {
  var sync = null;

  function init(syn) {
    sync = syn;
  }

  function listenPing(socket) {
    sync.listenToSocket(socket,'getPing', function(msg){
      socket.emit('receivePing', msg);
    });
  }

  return {
    init: init,
    listenPing: listenPing
  };

})();
