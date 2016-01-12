var CA = CA || {};

CA.Ping = (function() {

  var socket = null;

  function init() {
    listen();
    ping('abc');
  }

  function ping() {
    CA.Sync.send('getPing', $.now());
  }

  function listen() {
    CA.Sync.listen('receivePing', function(msg) {
      var currentPing = $.now() - msg;

      $('#ping').html(currentPing);
      setTimeout(function(){ ping('abc'); }, 3000);
    });
  }

  return {
    init: init,
    ping: ping,
    listen: listen
  };
})();
