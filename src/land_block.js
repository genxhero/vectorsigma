const GameSprite = require('./game_sprite');
const HeroSprite = require('./hero_sprite');
const BlockFragment = require("./block_frag");



class LandBlock extends GameSprite {
    constructor(params) {
        super(params)
        this.type = "LandBlock";
        this.hitboxHeight = 100;
        this.hitboxWidth = 100;
        this.isagoddamnblock = true;
        const blockImage = new Image();
        blockImage.src = "https://i.imgur.com/sQp9o0z.png";
        blockImage.height = 100;
        blockImage.width = 100;
        this.hp = params.hp;

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

    handleCollision(obstacle, hitPojo) {
        
    }

    hitDetected(obstacle) {
       return {hit: false};
    }




    remove() {
        // this.game.hero.touchingBlock = false;
        this.game.remove(this);
    }

    update(ctx) {                
      this.draw(ctx);
    }

    explody() {
        // this.game.ctx.strokeStyle = "orange";
        this.speed = 0;
        //TOP ROW
        let ula = new BlockFragment ({ imgCode: "ULA", posX: this.posX, posY: this.posY, game: this.game });
        ctx.drawImage(ula.image, this.posX, this.posY);
        let ulb = new BlockFragment({ imgCode: "ULB", posX: this.posX + 25, posY: this.posY, game: this.game });
        ctx.drawImage(ulb.image, this.posX + 25 , this.posY);
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


        const kaboosh = new Audio();
        kaboosh.src = "https://www.freesfx.co.uk/rx2/mp3s/6/17955_1464205617.mp3";
        kaboosh.play().then(this.game.remove(this));
        // this.game.remove(this);
    }

}
module.exports = LandBlock;