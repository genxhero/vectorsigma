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
        
        if (obstacle === undefined){
            return {hit: false};
        }
         if (this === obstacle){
             return { hit: false };
         }
         
        if (this.posX >= obstacle.hitboxWidth && 
            this.posX < (obstacle.posX + obstacle.hitboxWidth) &&
            // this.posX + this.hitboxWidth <= (obstacle.posX + obstacle.hitboxWidth) && 
           ( this.posX + this.hitboxWidth ) > obstacle.posX &&
             this.posY + this.hitboxHeight === obstacle.posY) {
             
          return {hit: true, type: "overhead"};


        } else if ( 
        //     (obstacle.posY + obstacle.hitboxHeight) >= this.posY &&
        //  (   this.posx < (obstacle.posX + obstacle.hitboxWidth) ||
        //   (  this.posX + this.hitboxWidth ) > obstacle.posX ) &&
        //     this.posX > obstacle.posX
            this.posX >= obstacle.hitboxWidth &&
            this.posX < (obstacle.posX + obstacle.hitboxWidth) &&
            (this.posX + this.hitboxWidth) > obstacle.posX &&
            this.posY < obstacle.posY + obstacle.hitboxHeight &&
             this.posX + (this.hitboxWidth / 2 ) > obstacle.posX
             )
            {
            return {hit: true, type: "sidestrike", striker: this.type, strikee: obstacle.type, direction: "left"};
            
        } else if (
            (obstacle.posY + obstacle.hitboxHeight) > this.posY &&
         (   this.posx < (obstacle.posX + obstacle.hitboxWidth) ||
         (this.posX + this.hitboxWidth ) > obstacle.posX ) && 
            this.posX < obstacle.posX
                 ) {
                 return { hit: true, type: "sidestrike", striker: this.type, strikee: obstacle.type, direction: "right" };
               } else {
                 return { hit: false };
               }
 }
     
  


}

module.exports = GameSprite;