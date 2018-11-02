const GameSprite = require('./game_sprite');
const EvilBlock = require('./evil_block');

class Punch extends GameSprite {

    constructor(params) {
        super(params)
        this.type = "kiblast";
        this.hitboxHeight = 10;
        this.hitboxWidth = 10;
        const punchImage = new Image();
        punchImage.src = "https://i.imgur.com/wx7qhXC.png";
        //10x10 too small
        punchImage.height = 10;
        punchImage.width = 10;
        this.posY = this.game.hero.posY + 70;
        this.image = punchImage;
        this.draw = this.draw.bind(this);
        this.image.onload = () => {
            this.loaded = true;
        };

    }

    update(ctx) {
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
        if (obstacle.type === "Evil Block") {
            console.log("punched the block");
            //add health to Evil Blocks
            this.game.hero.killScore += 1;
            obstacle.explody();
            this.remove();
        }
    }

    remove() {
        this.game.remove(this);
    }

}

module.exports = Punch;