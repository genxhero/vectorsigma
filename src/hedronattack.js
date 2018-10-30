const Game = require("./game");
const GameField = require("./game_field");

const Key = {
  //Special thanks to Arthur Schreiber
  _pressed: {},
  LEFT: 37,
  RIGHT: 39,
  isDown: function(keyCode) {
    return this._pressed[keyCode];
  },
  onKeydown: function(event) {
    this._pressed[event.keyCode] = true;
  },
  onKeyup: function(event) {
    delete this._pressed[event.keyCode];
  }
};

//new GameField(game, ctx).start();

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const game = new Game(ctx);
  game.drawField();
  window.ctx = ctx;


    document.onkeydown = (e) => {
        if (game.hero) {
            game.hero.move(e, ctx);
        }
    };

   
});
