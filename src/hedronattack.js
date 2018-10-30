const Game = require("./game");
const GameField = require("./game_field");


//const game = new Game();
//new GameField(game, ctx).start();

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const game = new Game(ctx);
  game.drawField();
  window.ctx = ctx;
});