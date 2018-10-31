const GameSprite = require('./game_sprite');

class HeroSprite extends GameSprite {
    constructor(options){
        super(options);
        this.speed = 0;
        this.hp = 100;
        const image = new Image();
        image.src = "https://i.imgur.com/JsuhqcT.png";
        image.height = 150;
        image.width = 75;
        this.hitboxHeight = 150;
        this.hitboxWidth = 75;
        this.image = image;
        this.draw = this.draw.bind(this);
        this.image.onload = () => {
             this.loaded = true;
        };

    }

     stillAlive(){
         if (this.hp > 0){
         return true 
        } else {
            return false;
        }
     }
    takeDamage(){
        console.log("Took 25 points of damage");
        this.hp -= 20;
        if (this.stillAlive()){
            const grunt = new Audio();
            grunt.src = "https://s3.us-east-2.amazonaws.com/hedronattack/kam_pain.m4a";
            grunt.play();
        } else {
            const deathCry = new Audio();
            deathCry.src = "https://s3.us-east-2.amazonaws.com/hedronattack/kam_death_take_1.m4a";
            deathCry.play();
        }
      
    }
    draw(ctx){
        // console.log(this.image);
        // console.log(`X: ${this.posX}, Y: ${this.posY}`);
        if (this.loaded) {
            ctx.drawImage(this.image, this.posX, this.posY);  
        }
       
    }

    goLeft(){
        if (this.posX > 50) {
            this.posX -= 12;
        }
        this.draw(ctx);
        // this.game.drawFrame();
    }

    goRight(){
      if (this.posX + 75 < ctx.canvas.width - 50) {
        this.posX += 12;
      }
        this.draw(ctx);
        // this.game.drawFrame();
    }

    update(Key){
        // console.log(Key);
        if (Key.isDown(Key.LEFT)) this.goLeft();
        if (Key.isDown(Key.RIGHT)) this.goRight();
    }

    remove(object) {
        if (object instanceof EvilBlock) {
            this.blocks.splice(this.blocks.indexOf(object), 1);
        } 
    }
}

module.exports = HeroSprite;