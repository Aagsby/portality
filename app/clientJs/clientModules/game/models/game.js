var CA = CA || {};

CA.Game = (function() {
  "use strict";

  var Game = function Game() {

    this.dudes = [];
    this.lines = [];

    Game.init();
  };

  Game.STATES = {
    WAITING: 'waiting',
    PLAYING: 'playing',
    OVER: 'over'
  };

  Game.init = function() {
    this.score = 0;
    this.state = Game.STATES.WAITING;
  };

  Game.prototype.addDude = function(name) {
    var dude = new CA.Dude(name);
    this.dudes.push(dude);
  };

  Game.prototype.addLine = function(startPoint) {
    var line = new CA.Line({startPoint: startPoint});

    console.log("line -> ", line);
  };

  return Game;
})();
