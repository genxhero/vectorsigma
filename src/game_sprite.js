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
        
         if (this === obstacle){
             return false;
         }
        if (this.posX >= obstacle.hitboxWidth && 
            this.posX < (obstacle.posX + obstacle.hitboxWidth) &&
            // this.posX + this.hitboxWidth <= (obstacle.posX + obstacle.hitboxWidth) && 
           ( this.posX + this.hitboxWidth )> obstacle.posX &&
             this.posY + this.hitboxHeight - 20 === obstacle.posY) {
             
          return {hit: true, type: "overhead"};
        } else {
          return {hit: false};
        }
 }
     
  


}

module.exports = GameSprite;