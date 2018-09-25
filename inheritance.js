Function.prototype.inherits = function(parent) {
  // function Surrogate() {}
  // Surrogate.prototype = parent.prototype;
  // this.prototype = new Surrogate();
  // this.prototype.constructor = this;
  
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
  
};


function MovingObject(color) {
  this.color = color;
}

// MovingObject.prototype.fly = function (distance) {
//   console.log('I saw a ' + this.color + 'object fly by');
// };

function Ship() {
  MovingObject.call(this);
}

Ship.inherits(MovingObject);

function Asteroid() {
  
}

Asteroid.inherits(MovingObject);