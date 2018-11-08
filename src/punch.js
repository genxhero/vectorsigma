const GameSprite = require('./game_sprite');
const EvilBlock = require('./evil_block');

class Punch extends GameSprite {

    constructor(params) {
                          super(params);
                          this.type = "Punch";
                          this.hitboxHeight = 16;
                          this.hitboxWidth = 45;
                          this.direction = params.direction;
                          const punchImage = new Image();
        punchImage.src = this.direction === "left" ? "https://i.imgur.com/OCQqgo7.png" : "https://i.imgur.com/gJJRwsC.png";
                          punchImage.height = 16;
                          punchImage.width = 45;
                          this.posY = this.game.hero.posY + 70;
                          this.image = punchImage;
                          this.draw = this.draw.bind(this);
                          this.image.onload = () => {
                            this.loaded = true;
                          };
                        }

    update(ctx) {
        this.draw(ctx);
        this.posX += this.speed;
        this.speed = 0
        this.remove();
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
        if (obstacle.type === "Evil Block" || obstacle.type ==="LandBlock") {
            this.draw(this.game.ctx);
            console.log("punched the block");
            //add health to Evil Blocks
            const strike = new Audio();
            strike.src = "https://www.freesfx.co.uk/rx2/mp3s/6/18111_1464287325.mp3";
            const bam = new Image();
            bam.src = "https://i.imgur.com/sSxgW60.png";
            this.game.ctx.drawImage(bam, obstacle.posX, obstacle.posY / 2);
            // setTimeout( funcy => {}, 50)
            strike.play();
            obstacle.hp -= 1
            if (obstacle.hp === 0){
                this.game.hero.killScore += 1;
                obstacle.explody();
            } 
            
        }
        this.remove();
    }

    remove() {
        this.game.remove(this);
    }

    

}

module.exports = Punch;