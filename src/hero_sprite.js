const GameSprite = require('./game_sprite');

class HeroSprite extends GameSprite {
    constructor(options){
        super(options);
        this.speed = 0;
        const image = new Image();
        image.src = "https://i.imgur.com/p25KSOI.png";
        image.height = 150;
        image.width = 75;
        this.image = image;
        this.draw = this.draw.bind(this);
        this.image.onload = () => {
             this.loaded = true;
        };

    }

    draw(ctx){
        console.log(this.image);
        console.log(`X: ${this.posX}, Y: ${this.posY}`);
        if (this.loaded) {
            ctx.drawImage(this.image, this.posX, this.posY);  
        }
        // this.image.onload = () => {
        //             
        // };
        // ctx.fillStyle="red";
        // ctx.fillRect(this.posX, this.posY, 75, 150);
    }

    move(event, ctx){
        if (event.keyCode === 65){
            // alert("go left");
            let oldRightSide = this.posX+this.image.width;
            if(this.posX > 50){
                this.posX -= 10;
            }

            // ctx.clearRect(oldRightSide, this.posY, 3, this.image.height);
            this.draw(ctx);
            this.game.drawFrame();

        } else if (event.keyCode === 68 ){
            // alert("go right");
            let oldPosX = this.posX;
           if (this.posX+75 < ctx.canvas.width-50){
            this.posX += 10;
           }
            // ctx.clearRect(oldPosX, this.posY, 3, this.image.height);
            this.draw(ctx);
            this.game.drawFrame();
        } else {
            console.log("Unbound key");
        }
    }

    
}

module.exports = HeroSprite;