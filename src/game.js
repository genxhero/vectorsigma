// const EvilBlock = require('./evil_block');
//const KiOrb = require('./ki_orb');
const HeroSprite = require('./hero_sprite');

class Game {
    constructor(ctx, Key){
        this.blocks = [];
        this.kiOrbs = [];
        this.ctx = ctx;
        this.Key = Key;
        alert(this.Key);
        this.drawField();
        this.grassLoaded = false;
        this.skyLoaded = false;
        this.pillarsLoaded=false;
        this.drawFrame.bind(this)();
       

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

    addBlocks(){

      
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

    

    dummyBlocks() {
        for (let squares = 0; squares < 5; squares++) {
            let x = (squares * 110) + Math.random() * 800;
            let y = 100;
            this.ctx.fillStyle = "gray";
            this.ctx.fillRect(x, y, 100, 100);
        }
    }
   drawField(){
        this.grassLoad();
        this.skyLoad();
        this.loadPillars();
        this.dummyBlocks();
        this.addHero();
  
   }
   drawFrame(){
       requestAnimationFrame(this.drawFrame.bind(this));
       this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
       let pattern = this.ctx.createPattern(this.grass, 'repeat');
       this.ctx.fillStyle = pattern;
       this.ctx.fillRect(0, 400, 800, 100);
       this.ctx.drawImage(this.sky, 0, -50);
       this.ctx.drawImage(this.leftPillar, 0, 0);
       this.ctx.drawImage(this.rightPillar, 750, 0)
       this.hero.update(this.Key);
       this.hero.draw(this.ctx);
       
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


