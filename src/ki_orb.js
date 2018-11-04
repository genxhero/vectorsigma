const GameSprite = require('./game_sprite');
const HeroSprite = require('./hero_sprite');

class PowerOrb extends GameSprite {

 constructor(params) {
    super(params)
        this.type = "orb";
this.speed = 8;
this.hitboxHeight = 50;
this.hitboxWidth = 50;
const image = new Image();
     image.src = "https://i.imgur.com/FjPOoV2.png";
image.height = 50;
image.width = 50;
this.image = image;
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
    if (obstacle instanceof HeroSprite) {
        this.game.grabOrb();
        this.remove();
    }

    
}

hitDetected(obstacle) {
    if (this === obstacle) {
        return { hit: false };
    }

    if (
        this.posX < (obstacle.posX + obstacle.hitboxWidth) &&
        (this.posX + this.hitboxWidth) > obstacle.posX &&
        this.posY + this.hitboxHeight === obstacle.posY) {

        return { hit: true, type: "overhead", striker: this.type, strikee: obstacle.type, strikerX: this.posX, strikerY: this.posY };
    } else if (obstacle.type === "Evil Block" &&

        this.posX >= obstacle.posX &&
        this.posX < obstacle.posX + obstacle.hitboxWidth &&
        this.posY === obstacle.posY
    ){
        this.posX += 110;
         return {hit: false}
    } else  {
        return { hit: false };
    }
}




remove() {
    this.game.remove(this);
}

update(ctx){
    if ((this.posY) < 400) {
        this.posY += this.speed;
        this.draw(ctx);
    } else if (this.posY >= 400) {
        this.speed = 0; 
        this.draw(ctx);
    }
}
//

}

module.exports = PowerOrb;