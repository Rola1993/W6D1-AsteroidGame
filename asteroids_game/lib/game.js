const Asteroid = require("./asteroid.js");

function Game() {
  this.DIM_X = 500;
  this.DIM_Y = 500;
  this.NUM_ASTEROIDS = 10;
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
  for(let i = 0; i < this.NUM_ASTEROIDS; i++){
    this.asteroids.push(new Asteroid({pos: this.randomPosition()}));
  }
};

Game.prototype.randomPosition = function() {
  const pos_x = Math.floor(Math.random() * 500);
  const pos_y = Math.floor(Math.random()*500);
  return [pos_x, pos_y];
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0,0,500,500);
  this.asteroids.forEach((el) => el.draw(ctx));
};

module.exports = Game;