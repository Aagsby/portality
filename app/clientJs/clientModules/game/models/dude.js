var CA = CA || {};

CA.Dude = (function() {
  "use strict";

  var Dude = function Dude(name) {
    this.name = name;
    this.drawData = {
      x: 0,
      y: 0,
      velocity: 0,
      orientation: 90
    };
  };

  return Dude;
})();
