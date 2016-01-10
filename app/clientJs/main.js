(function() {

	$(document).ready(function() {
    var socket = io();
    CA.Sync.init(socket);

    function newUser(id) {
      if(!$('#' + id).length) {
        $('body').append('<div class="marker" id="' + id + '"></div>');
        var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        $('#' + id).css({
          position: 'fixed',
          width: '10px',
          height: '10px',
          background: color,
          top: '0',
          left: '0'
        });
      }
    }

    CA.Sync.listen('new_user',function(msg){
      newUser(msg);
    });

    CA.Sync.listen('user_gone',function(msg){
      $('#' + msg).remove();
    });

    CA.Sync.listen('move',function(msg){
      var data = msg;
      newUser(data.id);
      $('#' + data.id).css({
        top: data.y + 'px',
        left: data.x + 'px'
      });
    });

    var timer;
    var stoppedData = {x: 0, y: 0};

    function mouseStopped(e){
        CA.Sync.send('move', stoppedData);
    }

    window.addEventListener("mousemove",function(e){
        stoppedData = {
          x: e.clientX,
          y: e.clientY
        };
        clearTimeout(timer);
        timer=setTimeout(mouseStopped,25);
    });

    function mouseMoveHandler() {
      $(window).on('mousemove',function(e){
        var data = {
          x: e.clientX,
          y: e.clientY
        };
        $(window).off('mousemove');
        CA.Sync.send('move', data);
        setTimeout(mouseMoveHandler,20);
      });
    }
    mouseMoveHandler();
  });

})(); 