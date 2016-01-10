var CA = CA || {};

CA.Line = (function() {
  "use strict";

  var Line = function Line(config) {
    this.startPoint = config.startPoint;
    this.endPoint = null;
    this.type = Line.TYPES.PLATFORM;
  };

  Line.TYPES = {
    PLATFORM: 'platform',
    PORTAL: 'portal'
  };

  return Line;
})();
