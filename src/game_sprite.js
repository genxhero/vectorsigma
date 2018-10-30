class GameSprite {
    constructor(params) {
        this.posX = params.posX;
        this.posY = params.posY;
        this.hitboxWidth = params.hitboxWidth;
        this.hitboxHeight = params.hitboxHeight;
        this.speed = params.speed;
        this.image = params.image;
        this.game = params.game;
    }

    handleCollision(obstacle) {

    }

    draw(ctx){
        console.log(this.image);
        console.log(`X: ${this.posX}, Y: ${this.posY}`);
        ctx.drawImage(this.image, this.posX, this.posY);
    };

    hitDetected(obstacle) {
       if (this.posY + (this.hitboxHeight / 2)  >= obstacle.hitboxHeight && obstacle.posX === this.posx){

       } else {
           return false;
       }
    }
     
    distance(pos1, pos2) {
        return Math.sqrt(
            Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
        );
    }


}

module.exports = GameSprite;