const GameSprite = require('./game_sprite');
const EvilBlock = require('./evil_block');

class KiBlast extends GameSprite {

    constructor(params) {
        super(params)
        this.type = "Evil Block";
        this.hitboxHeight = 10;
        this.hitboxWidth = 10;
        const blastImage = new Image();
        blastImage.src = "https://i.imgur.com/wx7qhXC.png";
        //10x10 too small
        blastImage.height = 10;
        blastImage.width = 10;
        this.posY = this.game.hero.posY + 70;
        this.image = blastImage;
        this.draw = this.draw.bind(this);
        this.image.onload = () => {
            this.loaded = true;
        };

    }

    update(ctx){
        this.posX += this.speed;
         this.draw(ctx);
         if (this.posX > ctx.canvas.width || this.posX <= 0) {
             this.remove();
         }
     }



    draw(ctx) {
        if (this.loaded) {
            ctx.drawImage(this.image, this.posX, this.posY);
        }
    }

    handleCollision(obstacle) {
        if (obstacle instanceof EvilBlock){
            console.log("Hit the block");
        }
    }

    remove(){
        this.game.remove(this);
    }

}

module.exports = KiBlast;