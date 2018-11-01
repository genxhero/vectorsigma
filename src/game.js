const EvilBlock = require('./evil_block');
//const KiOrb = require('./ki_orb');
const HeroSprite = require('./hero_sprite');

class Game {
    constructor(ctx, Key){
        this.over = false;
        this.lastBlockX = 300;
        this.blocks = [];
        this.addBlock = this.addBlock.bind(this);
        this.kiOrbs = [];
        this.ctx = ctx;
        this.Key = Key;
        // alert(this.Key);
        this.drawField();
        this.grassLoaded = false;
        this.skyLoaded = false;
        this.pillarsLoaded=false;
        this.drawFrame.bind(this)();
    }

    allSprites() {
        return [].concat([this.hero], this.blocks);
       
    }

    detectCollision(){
        const sprites = this.allSprites();
        for (let idx1 = 0; idx1 < sprites.length; idx1++){
            for (let idx2 = 0; idx2 < sprites.length; idx2++ ){
                
                let striker = sprites[idx1];
                let strikee = sprites[idx2];
                if (striker instanceof EvilBlock && strikee instanceof EvilBlock) {
                    continue;
                }
                let hitPojo = striker.hitDetected(strikee);
                if (hitPojo.hit){
                    console.log(hitPojo);
                    let type = hitPojo.type;
                    
                    let hit = striker.handleCollision(strikee, type);
                    if (hit) return ;
        }
      }
     }
    }

    addHero(){
      const hero = new HeroSprite({
        game: this,
        posX: 350,
        posY: 300
      });
    //   debugger;
      this.hero = hero;
      hero.draw(this.ctx);

    }

    addBlock(){
       let newBlock = new EvilBlock({
         game: this,
         posY: -50,
         posX: Math.floor(Math.random() * 600) + 50
       });
       this.blocks.push(newBlock);
       newBlock.draw(this.ctx);
    }

    addKiOrbs(){
      
    }



    grassLoad(){

        this.grass = new Image();
        this.grass.src = 'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/2824633/300/200/m1/fpnw/wm0/1601.m10.i311.n029.s.c10.164511620-seamles-.jpg?1497007612&s=843a14180b1390bf4585dd7e668e1683';
        const grassLoad = () => {
            console.log("LINE 32: We are in the grass load function");
            let pattern = this.ctx.createPattern(this.grass, 'repeat');
            this.ctx.fillStyle = pattern;
            this.ctx.fillRect(0, 400, 800, 100);
        };
        this.grass.onload = function () { grassLoad() };
     }

    skyLoad(){
        this.sky = new Image();
        this.sky.src = 'https://i.imgur.com/MbBpcOx.png';
        const skyLoad = () => {
        this.ctx.drawImage(this.sky, 0, -50);
        };

        this.sky.onload = function () { skyLoad() };
    }

    loadPillars(){
        this.leftPillar= new Image();
        this.leftPillar.src = "https://i.imgur.com/UibkSXB.png";
        this.rightPillar = new Image();
        this.rightPillar.src = "https://i.imgur.com/UibkSXB.png";
        const loadPillars = () => {
            this.ctx.drawImage(this.leftPillar, 0, 0);
            this.ctx.drawImage(this.rightPillar, 750, 0)
        };
        this.rightPillar.onload = function () {loadPillars ();}
        this.leftPillar.onload = function () {loadPillars() };
    }

    moveBlocks(){
       for(i in this.blocks) {
          this.blocks[i].update(this.ctx);
       }
    }
  

    
   drawField(){
        this.grassLoad();
        this.skyLoad();
        this.loadPillars();
        // this.addBlock();
       setInterval(() => this.addBlock(), 500);
        this.addHero();  
        alert("The evil Hedronites are making a desperate attack! Fight, Kam! For great justice!");

   }

   
   drawFrame(){
       requestAnimationFrame(this.drawFrame.bind(this));
       this.detectCollision();
       if (this.over) {
           console.log("You died.");
           this.over = false;
           return;
       } else {
           this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
           let pattern = this.ctx.createPattern(this.grass, 'repeat');
           this.ctx.fillStyle = pattern;
           this.ctx.fillRect(0, 400, 800, 100);
           let hp = document.getElementById('hero-hp')
           hp.innerText = `Current HP: ${this.hero.hp}`;
           this.ctx.drawImage(this.sky, 0, -50);
           this.ctx.drawImage(this.leftPillar, 0, 0);
           this.ctx.drawImage(this.rightPillar, 750, 0)
           this.moveBlocks();
           this.hero.update(this.Key);
           this.hero.draw(this.ctx);
       }
  
      
   }
   remove(sprite){
       if (sprite instanceof EvilBlock){
           this.blocks.splice(this.blocks.indexOf(sprite), 1);
       }
   }
}

module.exports = Game;




// SPECIAL THANKS TO PAUL IRISH FOR HIS BOILERPLATE FUNCTION!
// window.requestAnimFrame = (function () {
//     return window.requestAnimationFrame ||
//         window.webkitRequestAnimationFrame ||
//         window.mozRequestAnimationFrame ||
//         window.oRequestAnimationFrame ||
//         window.msRequestAnimationFrame ||
//         function (callback) {
//             window.setTimeout(callback, 1000 / 60);
//         };
// })(); 


