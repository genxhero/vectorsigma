const GameSprite = require('./game_sprite');
const HeroSprite = require('./hero_sprite');



class EvilBlock extends GameSprite {
    constructor(params){
        super(params)
        this.type = "Evil Block";
        this.speed = 5;
        this.hitboxHeight = 100;
        this.hitboxWidth = 100;
        this.isagoddamnblock = true;
        const blockImage = new Image();
        blockImage.src = "https://i.imgur.com/vlgHgAL.png";
        blockImage.height = 100;
        blockImage.width = 100;
        
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

    handleCollision(obstacle, hitPojo){
        if (obstacle instanceof HeroSprite && hitPojo.type === "overhead") {
            obstacle.takeDamage();
            this.remove();
        }
    }

    hitDetected(obstacle) {
        if (this === obstacle) {
            return {hit: false};
        }

        if (this.posX >= obstacle.hitboxWidth &&
            this.posX < (obstacle.posX + obstacle.hitboxWidth) &&
            // this.posX + this.hitboxWidth <= (obstacle.posX + obstacle.hitboxWidth) && 
            (this.posX + this.hitboxWidth) > obstacle.posX &&
            this.posY + this.hitboxHeight === obstacle.posY) {

            return { hit: true, type: "overhead" };
            } else {
                return {hit: false};
            }
    }




    remove() {
        this.game.hero.touchingBlock = false;
        this.game.remove(this);
    }

    update(ctx){
        if ((this.posY) < 350) {
            this.posY += this.speed;
            this.draw(ctx);
        } else if( this.posY >= 350 ){
            const smack = new Audio();
            smack.src = "https://www.freesfx.co.uk/rx2/mp3s/6/18365_1464637302.mp3";
            smack.play();
            this.game.remove(this);
        }
    }

    explody(){
        this.game.ctx.strokeStyle = "orange";
        this.speed = 0;
        const centerX = this.posX + 50;
        const centerY = this.posY + 50;
        const startRad = 10;
        const endRad = 100;
        let currentRad = startRad;
        const kaboosh = new Audio();
        kaboosh.src = "https://www.freesfx.co.uk/rx2/mp3s/6/17955_1464205617.mp3";
        kaboosh.play().then(this.game.remove(this));
        // this.game.remove(this);
    }

}
module.exports = EvilBlock;