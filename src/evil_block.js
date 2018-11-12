const GameSprite = require('./game_sprite');
const HeroSprite = require('./hero_sprite');
const LandBlock = require('./land_block');
const BlockFragment = require('./block_frag');



class EvilBlock extends GameSprite {
    constructor(params){
        super(params)
        this.type = "Evil Block";
        this.speed = 10;
        this.hp = 2;
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
        let ula = new BlockFragment({ imgCode: "ULA", posX: this.posX, posY: this.posY, game: this.game });
        ctx.drawImage(ula.image, this.posX, this.posY);
        let ulb = new BlockFragment({ imgCode: "ULB", posX: this.posX + 25, posY: this.posY, game: this.game });
        ctx.drawImage(ulb.image, this.posX + 25, this.posY);
        let ura = new BlockFragment({ imgCode: "URA", posX: this.posX + 50, posY: this.posY, game: this.game });
        ctx.drawImage(ura.image, this.posX + 50, this.posY);
        let urb = new BlockFragment({ imgCode: "URB", posX: this.posX + 75, posY: this.posY, game: this.game });
        ctx.drawImage(urb.image, this.posX + 75, this.posY);
        //SECOND ROW
        let ulc = new BlockFragment({ imgCode: "ULC", posX: this.posX, posY: this.posY + 25, game: this.game });
        ctx.drawImage(ulc.image, this.posX, this.posY + 25);
        let uld = new BlockFragment({ imgCode: "ULD", posX: this.posX + 25, posY: this.posY + 25, game: this.game });
        ctx.drawImage(uld.image, this.posX + 25, this.posY + 25);
        let urc = new BlockFragment({ imgCode: "URC", posX: this.posX + 50, posY: this.posY + 25, game: this.game });
        ctx.drawImage(urc.image, this.posX + 50, this.posY + 25);
        let urd = new BlockFragment({ imgCode: "URD", posX: this.posX + 75, posY: this.posY + 25, game: this.game });
        ctx.drawImage(urd.image, this.posX + 75, this.posY + 25);
        //Third Row
        let dla = new BlockFragment({ imgCode: "DLA", posX: this.posX, posY: this.posY + 50, game: this.game });
        ctx.drawImage(dla.image, this.posX, this.posY + 50);
        let dlb = new BlockFragment({ imgCode: "DLB", posX: this.posX + 25, posY: this.posY + 50, game: this.game });
        ctx.drawImage(dlb.image, this.posX + 25, this.posY + 50);
        let dra = new BlockFragment({ imgCode: "DRA", posX: this.posX + 50, posY: this.posY + 50, game: this.game });
        ctx.drawImage(dra.image, this.posX + 50, this.posY + 50);
        let drb = new BlockFragment({ imgCode: "DRB", posX: this.posX + 75, posY: this.posY + 50, game: this.game });
        ctx.drawImage(drb.image, this.posX + 75, this.posY + 50);
        //fourth row
        let dlc = new BlockFragment({ imgCode: "DLC", posX: this.posX, posY: this.posY + 75, game: this.game });
        ctx.drawImage(dlc.image, this.posX, this.posY + 75);
        let dld = new BlockFragment({ imgCode: "DLD", posX: this.posX + 25, posY: this.posY + 75, game: this.game });
        ctx.drawImage(dld.image, this.posX + 25, this.posY + 75);
        let drc = new BlockFragment({ imgCode: "DRC", posX: this.posX + 50, posY: this.posY + 75, game: this.game });
        ctx.drawImage(drc.image, this.posX + 50, this.posY + 75);
        let drd = new BlockFragment({ imgCode: "DRD", posX: this.posX + 75, posY: this.posY + 75, game: this.game });
        ctx.drawImage(drd.image, this.posX + 75, this.posY + 75);
        const kaboosh = new Audio();
        kaboosh.src = "https://www.freesfx.co.uk/rx2/mp3s/6/17955_1464205617.mp3";
        

        kaboosh.play().then(this.game.remove(this));
      
        // this.game.remove(this);
    }

}
module.exports = EvilBlock;