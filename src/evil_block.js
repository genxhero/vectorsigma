const GameSprite = require('./game_sprite');
const HeroSprite = require('./hero_sprite');
const LandBlock = require('./land_block');



class EvilBlock extends GameSprite {
    constructor(params){
        super(params)
        this.type = "Evil Block";
        this.speed = 10;
        this.hp = 3;
        this.hitboxHeight = 100;
        this.hitboxWidth = 100;
        this.isagoddamnblock = true;
        const blockImage = new Image();
        blockImage.src = "https://i.imgur.com/JPnUwpN.png";
        blockImage.height = 100;
        blockImage.width = 100;
        this.image = blockImage;
        this.draw = this.draw.bind(this);
        this.game.blockLocations.push(this.posX);
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

        if (obstacle instanceof LandBlock && hitPojo.type === "overhead") {
            // console.log("Block destroys land block");
            const smack = new Audio();
            smack.src = "https://www.freesfx.co.uk/rx2/mp3s/6/18365_1464637302.mp3";
            smack.play();
            obstacle.remove();
        }
    }

    hitDetected(obstacle) {
        if (this === obstacle) {
            return {hit: false};
        }

        if (
            //trying or
            this.posX < (obstacle.posX + obstacle.hitboxWidth) &&
            // this.posX + this.hitboxWidth <= (obstacle.posX + obstacle.hitboxWidth) && 
            (this.posX + this.hitboxWidth) > obstacle.posX &&
            this.posY + this.hitboxHeight  === obstacle.posY) {

            return { hit: true, type: "overhead", striker: this.type, strikee: obstacle.type, strikerX: this.posX, strikerY: this.posY};
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
            const landy = new LandBlock ({hp: this.hp, posX: this.posX, posY: this.posY, game: this.game});
            this.game.remove(this);        
            ctx.drawImage(landy.image, this.posX, this.posY);
            this.game.landblocks.push(landy);
        }
    }

    explody(){
        this.speed = 0;
        
        const kaboosh = new Audio();
        kaboosh.src = "https://www.freesfx.co.uk/rx2/mp3s/6/17955_1464205617.mp3";
        kaboosh.play().then(this.game.remove(this));
        // this.game.remove(this);
    }

}
module.exports = EvilBlock;