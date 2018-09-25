const MovingObject = require("./moving_object.js");
const Util = require("./util.js");

function Asteroid(options) {
  this.COLOR = 'brown';
  this.RADIUS = 10; 
  MovingObject.call(this, {
    color: this.COLOR,
    radius: this.RADIUS,
    pos: options.pos,
    vel: Util.randomVec(6)
  });
}
Util.inherits(Asteroid, MovingObject);
module.exports = Asteroid;

