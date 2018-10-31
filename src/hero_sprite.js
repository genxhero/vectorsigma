const GameSprite = require('./game_sprite');

class HeroSprite extends GameSprite {
    constructor(options){
        super(options);
        this.speed = 0;
        const image = new Image();
        image.src = "https://i.imgur.com/JsuhqcT.png";
        //i.imgur.com/JsuhqcT.png
        https: image.height = 150;
        image.width = 75;
        this.image = image;
        this.draw = this.draw.bind(this);
        this.image.onload = () => {
             this.loaded = true;
        };

    }

    draw(ctx){
        // console.log(this.image);
        // console.log(`X: ${this.posX}, Y: ${this.posY}`);
        if (this.loaded) {
            ctx.drawImage(this.image, this.posX, this.posY);  
        }
       
    }

    goLeft(){
        if (this.posX > 50) {
            this.posX -= 5;
        }
        this.draw(ctx);
        // this.game.drawFrame();
    }

    goRight(){
      if (this.posX + 75 < ctx.canvas.width - 50) {
        this.posX += 5;
      }
        this.draw(ctx);
        // this.game.drawFrame();
    }

    update(Key){
        // console.log(Key);
        if (Key.isDown(Key.LEFT)) this.goLeft();
        if (Key.isDown(Key.RIGHT)) this.goRight();
    }
}

module.exports = HeroSprite;