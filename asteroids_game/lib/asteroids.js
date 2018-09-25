const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");

window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function() {
  const my_canvas = document.getElementById("my_canvas");
  const ctx = my_canvas.getContext("2d");

  const circle = new MovingObject({ pos: [30, 45], vel: [10, 10], radius: 20, color: "pink"});
  const roid = new Asteroid({pos: [210, 55]});
  const game = new Game();
  game.draw(ctx);
  });
