const GameSprite = require('./game_sprite');
const EvilBlock = require('./evil_block');

class KiBlast extends GameSprite {

    constructor(params) {
        super(params)
        this.type = "kiblast";
        this.direction = params.direction
        this.hitboxHeight = 10;
        this.hitboxWidth = 40;
        // const shout = new Audio();
        // shout.src = './src/Untitled.m4a';
        // shout.play();
        const blastImage = new Image();
        if (this.direction === "left") {
            blastImage.src = "https://i.imgur.com/JTlDHcY.png";
        } else {
            blastImage.src = "https://i.imgur.com/ztUamgG.png";
        }
        //10x10 too small
        blastImage.height = 20;
        blastImage.width = 40;
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
         if (this.posX >= ctx.canvas.width || this.posX <= 0) {
             this.remove();
         }
     }



    draw(ctx) {
        if (this.loaded) {
            ctx.drawImage(this.image, this.posX, this.posY);
        }
    }

    handleCollision(obstacle) {
        if (obstacle.type === "Evil Block" || obstacle.type === "LandBlock") {
          this.game.hero.killScore += 1;
          obstacle.explody();
          this.remove();
        }
    }

    remove(){
        this.game.remove(this);
    }

}

module.exports = KiBlast;