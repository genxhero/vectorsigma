const GameSprite = require('./game_sprite');
const HeroSprite = require('./hero_sprite');



class LandBlock extends GameSprite {
    constructor(params) {
        super(params)
        this.type = "LandBlock";
        this.hitboxHeight = 100;
        this.hitboxWidth = 100;
        this.isagoddamnblock = true;
        const blockImage = new Image();
        blockImage.src = "https://i.imgur.com/fq7m14C.png";
        blockImage.height = 100;
        blockImage.width = 100;
        this.hp = params.hp;

        this.image = blockImage;
        this.draw = this.draw.bind(this);
        this.image.onload = () => {
            this.loaded = true;
        };

    }

    draw(ctx) {
        if (this.loaded) {
            ctx.drawImage(this.image, this.posX, this.posY);
        }
    }

    handleCollision(obstacle, hitPojo) {
        
    }

    hitDetected(obstacle) {
       return {hit: false};
    }




    remove() {
        // this.game.hero.touchingBlock = false;
        this.game.remove(this);
    }

    update(ctx) {                
      this.draw(ctx);
    }

    explody() {
        // this.game.ctx.strokeStyle = "orange";
        this.speed = 0;
        
        const kaboosh = new Audio();
        kaboosh.src = "https://www.freesfx.co.uk/rx2/mp3s/6/17955_1464205617.mp3";
        kaboosh.play().then(this.game.remove(this));
        // this.game.remove(this);
    }

}
module.exports = LandBlock;