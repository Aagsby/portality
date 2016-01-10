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
          width: '30px',
          height: '30px',
          borderRadius: '100%',
          border: '3px solid black',
          transform: 'translate(-50%,-50%)',
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
      $(window).on('mousemove touchmove',function(e){
        var data = {
          x: e.clientX,
          y: e.clientY
        };
        $(window).off('mousemove touchmove');
        CA.Sync.send('move', data);
        setTimeout(mouseMoveHandler,20);
      });
    }
    mouseMoveHandler();

    CA.Phaser.main.init();
  });

})(); 