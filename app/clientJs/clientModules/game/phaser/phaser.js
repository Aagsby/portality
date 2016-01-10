CA = CA || {};

CA.Phaser = CA.Phaser || {};

CA.Phaser.main = (function(){

  var game = null;
  var players = null;

  function init() {
    if(!$('#phaser-example').length){
      return;
    }
    game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

    function preload() {

      game.load.spritesheet('dude', 'images/dude.png', 32, 48);
      game.load.image('background', 'images/bg.jpg');

    }

    players = [1];
    var cursors;
    var jumpButton;
    var bg;

    function create() {

      game.physics.startSystem(Phaser.Physics.ARCADE);

      game.time.desiredFps = 30;

      bg = game.add.tileSprite(0, 0, 1280, 720, 'background');

      game.physics.arcade.gravity.y = 250;

      for(var i = 0; i < players.length; i++) {
        players[i] = game.add.sprite(64 + (64 * i), 32, 'dude');
        game.physics.enable(players[i], Phaser.Physics.ARCADE);

        players[i].facing = 'right';
        players[i].body.bounce.y = 0.2;
        players[i].body.collideWorldBounds = true;
        players[i].body.setSize(20, 32, 5, 16);

        players[i].animations.add('left', [0, 1, 2, 3], 10, true);
        players[i].animations.add('turn', [4], 20, true);
        players[i].animations.add('right', [5, 6, 7, 8], 10, true);

        cursors = game.input.keyboard.createCursorKeys();
        jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      }
    }

    function update() {

      for(var i = 0; i < players.length; i++) {
        players[i].body.velocity.x = 0;

        if (cursors.left.isDown)
        {
          players[i].body.velocity.x = -150;

          if (players[i].facing != 'left')
          {
            players[i].animations.play('left'); 
            players[i].facing = 'left';
          }
        }
        else if (cursors.right.isDown)
        {
          players[i].body.velocity.x = 150;

          if (players[i].facing != 'right')
          {
            players[i].animations.play('right');
            players[i].facing = 'right';
          }
        }
        else
        {
          if (players[i].facing != 'idle')
          {
            players[i].animations.stop();

            if (players[i].facing == 'left')
            {
              players[i].frame = 0;
            }
            else
            {
              players[i].frame = 5;
            }

            players[i].facing = 'idle';
          }
        }

        if (jumpButton.isDown && players[i].body.onFloor())
        {
          players[i].body.velocity.y = -250;
        }
      }

    }

    function render () {
      game.debug.text(game.time.suggestedFps, 32, 32);
    }
  }

  function addPlayer() {
    if(!game || !players) {
      return;
    }
    var newPlayer = game.add.sprite(64, 32, 'dude');
    game.physics.enable(newPlayer, Phaser.Physics.ARCADE);

    newPlayer.facing = 'right';
    newPlayer.body.bounce.y = 0.2;
    newPlayer.body.collideWorldBounds = true;
    newPlayer.body.setSize(20, 32, 5, 16);

    newPlayer.animations.add('left', [0, 1, 2, 3], 10, true);
    newPlayer.animations.add('turn', [4], 20, true);
    newPlayer.animations.add('right', [5, 6, 7, 8], 10, true);

    players.push(newPlayer);
  }

  return {
    init: init,
    addPlayer: addPlayer
  };

}());