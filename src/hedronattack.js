const Game = require("./game");
const GameField = require("./game_field");

const Key = {
  //Special thanks to Arthur Schreiber
  _pressed: {},
  LEFT: 65,
  RIGHT: 68,
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

window.addEventListener('keyup',  (event) => {
     Key.onKeyup(event); 
    }, false);
window.addEventListener('keydown',  (event) => {
     Key.onKeydown(event); 
    }, false);



document.addEventListener("DOMContentLoaded", () => {
//   window.Key = Key;
  console.log("Key:", Key);
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const game = new Game(ctx, Key);
  // game.drawField();
   window.ctx = ctx;
  

    // document.onkeydown = (e) => {
    //     if (game.hero) {
    //         game.hero.move(e, ctx);
    //     }
    // };
            
});
