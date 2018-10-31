const GameSprite = require('./game_sprite');
const HeroSprite = require('./hero_sprite');



class EvilBlock extends GameSprite {
    constructor(params){
        super(params)
        this.hitboxHeight = 100;
        this.hitboxWidth = 100;
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

    handleCollision(obstacle){
        console.log("block hit something");
        if (obstacle instanceof HeroSprite) {
            obstacle.takeDamage();
            this.remove();
        }
    }



    remove() {
        this.game.remove(this);
    }

    update(ctx){
        if ((this.posY + 100) < 450) {
            this.posY += 10;
            this.draw(ctx);
        } else if( this.posY === 450 ){
            this.ctx.fillStyle = "brown";
            this.fillRect(this.posX, 550, 100, 50);
        }
    }

}
module.exports = EvilBlock;