const GameSprite = require('./game_sprite');
const EvilBlock = require('./evil_block');
const KiBlast = require('./ki_blash');
const Punch = require('./punch');

class HeroSprite extends GameSprite {
    constructor(options){
        super(options);
        this.type = "hero";
        this.speed = 0;
        this.hp = 100;
        this.kp = 50;
      
        const limage = new Image();
        //working
        // limage.src = "https://i.imgur.com/40rrdZ4.png"; 
        //test
        limage.src = "https://i.imgur.com/HO2C6li.png";
        limage.height = 150;
        limage.width = 75;
        this.limage = limage
        this.limage.onload = () => {
            this.loaded = true;
        };
        this.hitboxHeight = 150;
        this.hitboxWidth = 75;
        const rimage = new Image();
        // rimage.src = "https://i.imgur.com/JsuhqcT.png";
        rimage.src = "https://i.imgur.com/dNyUHgK.png";
        rimage.height = 150;
        rimage.width = 75;
        this.rimage = rimage;
        this.image = rimage;
        this.touchingBlock = false;
        this.draw = this.draw.bind(this);
        this.facing = "right";
        this.killScore = 0;
        this.collected = 0;
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

     handleCollision(obstacle, hitPojo){
        //  debugger;
         if (obstacle.isagoddamnblock && hitPojo.type === "sidestrike" && hitPojo.direction === "right"){
             const tink = new Audio();
             tink.src = "https://s3.us-east-2.amazonaws.com/hedronattack/baseball_short.m4a";
             if (tink.currentTime <= 0 && tink.paused && obstacle.type === "Evil Block") {
                tink.play();
            } else {
                tink.pause();
            }
//document.createElement
             this.posX -= 12;
             if (obstacle.type === "Evil Block") {
                 obstacle.posX += 2;
             }
             this.draw(ctx);

         } else if (obstacle.isagoddamnblock && hitPojo.type === "sidestrike" && hitPojo.direction === "left"){
             const tink = new Audio();
             tink.src = "https://s3.us-east-2.amazonaws.com/hedronattack/baseball_short.m4a";

             if (tink.currentTime <= 0 && tink.paused && obstacle.type === "Evil Block") {
                 tink.play();
             }  else {
                 tink.pause();
             }

             this.posX += 12;
             if (obstacle.type === "Evil Block") {
                 obstacle.posX += 2;
             } 
              
         } else if (obstacle.type === "orb" && hitPojo.type === "sidestrike"){
                 this.game.grabOrb();
                 obstacle.remove();
             } 
         this.draw(ctx);
     }

  

    takeDamage(){
        this.hp -= 10;
        if (this.stillAlive()){
            const grunt = new Audio();
            grunt.src = "https://s3.us-east-2.amazonaws.com/hedronattack/kam_pain.m4a";
            grunt.play();
        } else {
            this.speed = 0;
            const deathCry = new Audio();
             deathCry.src = "https://s3.us-east-2.amazonaws.com/hedronattack/kam_death_take_1.m4a";
             deathCry.play();
            setTimeout(this.game.lose, 500);
            //  this.game.over = true;
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
        this.facing = "left";
        this.image = this.limage;
        // this.draw(ctx)
        if (this.posX > 50) {
            this.posX -= 12;
        }
        this.draw(ctx);
        // this.game.drawFrame();
    }

    goRight(){
        this.facing = "right";
        this.image = this.rimage;
        // this.draw(ctx);
      if (this.posX + 75 < ctx.canvas.width - 52) {
        this.posX += 12;
      }
        this.draw(ctx);
        // this.game.drawFrame();
    }

    update(Key){
        // console.log(Key);
        
        if (Key.isDown(Key.LEFT)) this.goLeft();
        if (Key.isDown(Key.RIGHT)) this.goRight();
        if (Key.isDown(Key.KI)) {
            Key._pressed[75] = false;
            this.kiBlast();
        }
        if (Key.isDown(Key.PUNCH)) {
            Key._pressed[80] = false;
            this.punch();
        }
    }
    

   
    kiBlast(){

        if (this.kp > 0 ){
            if (this.facing === "left"){
                this.kp -= 1;
                const blast = new KiBlast({speed: -10, posX: this.posX - 5, game: this.game, direction: "left"});
                this.game.kiBlasts.push(blast);
                
            } else {
                this.kp -= 1;
                const blast = new KiBlast({ speed: 10, posX: this.posX + 80, game:this.game, direction: "right"});
                this.game.kiBlasts.push(blast);

            }
     }  else {
         const oom = new Audio();
            oom.src = "https://s3.us-east-2.amazonaws.com/hedronattack/ki_sapped_take_1.m4a";
            oom.play();
     }
        this.draw(ctx);

    }


    punch(){
            const kiai = new Audio();
            kiai.src = "https://s3.us-east-2.amazonaws.com/hedronattack/kiat_takeone.m4a";
            kiai.play();
            if (this.facing === "left") {
               
                const punch = new Punch({ speed: -8, posX: this.posX - 20, game: this.game, direction: "left"});
                this.game.punches.push(punch);
            } else {
                
                const punch = new Punch({ speed: 8, posX: this.posX + 70, game: this.game, direction: "right" });
                this.game.punches.push(punch);
                punch.draw(this.game.ctx);

            }
    
        this.draw(ctx);
    }

    remove(object) {
        if (object instanceof EvilBlock) {
            this.blocks.splice(this.blocks.indexOf(object), 1);
        } 
    }
}

module.exports = HeroSprite;