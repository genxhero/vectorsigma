const GameSprite = require('./game_sprite');
const HeroSprite = require('./hero_sprite');

class PowerOrb extends GameSprite {

 constructor(params) {
    super(params)
        this.type = "orb";
this.speed = 10;
this.hitboxHeight = 20;
this.hitboxWidth = 20;
this.isagoddamnblock = true;
const image = new Image();
     image.src = "https://i.imgur.com/0qRGch3.png";
image.height = 20;
image.width = 20;
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
    if (obstacle instanceof HeroSprite && hitPojo.type === "overhead") {
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
    if ((this.posY) < 350) {
        this.posY += this.speed;
        this.draw(ctx);
    } else if (this.posY >= 350) {
        this.game.remove(this);
        
    }
}
//

}

module.exports = PowerOrb;