// const EvilBlock = require('./evil_block');
//const KiOrb = require('./ki_orb');
const HeroSprite = require('./hero_sprite');

class Game {
    constructor(ctx){
        this.blocks = [];
        this.kiOrbs = [];
        // this.heroSprite = undefined;
        this.ctx = ctx;
    }

    addHero(){
      const hero = new HeroSprite({
        game: this,
        posX: 350,
        posY: 300
      });
    //   this.heroSprite = hero;
      hero.draw(this.ctx);

    }

    addBlocks(){

      
    }

    addKiOrbs(){
      
    }

    grassLoad(){
        const grass = new Image();
        grass.src = 'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/2824633/300/200/m1/fpnw/wm0/1601.m10.i311.n029.s.c10.164511620-seamles-.jpg?1497007612&s=843a14180b1390bf4585dd7e668e1683';
        const grassLoad = () => {
            console.log("LINE 32: We are in the grass load function");
            let pattern = this.ctx.createPattern(grass, 'repeat');
            this.ctx.fillStyle = pattern;
            this.ctx.fillRect(0, 400, 800, 100);
        };
        grass.onload = function () { grassLoad() };
     }

    skyLoad(){
        const sky = new Image();
        sky.src = 'https://i.imgur.com/MbBpcOx.png';
        const skyLoad = () => {
        this.ctx.drawImage(sky, 0, -50);
        };

        sky.onload = function () { skyLoad() };
    }

    dummyBlocks() {
        for (let squares = 0; squares < 5; squares++) {
            let x = (squares * 110) + Math.random() * 800;
            let y = 100;
            console.log(`X: ${x}, Y: ${y}`);
            this.ctx.fillStyle = "gray";
            this.ctx.fillRect(x, y, 100, 100);
        }
    }
   drawField(){
        this.grassLoad();
        this.skyLoad();
        this.dummyBlocks();
        this.addHero();
    //    const grass = new Image();
    //    grass.src = 'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/2824633/300/200/m1/fpnw/wm0/1601.m10.i311.n029.s.c10.164511620-seamles-.jpg?1497007612&s=843a14180b1390bf4585dd7e668e1683';

    //    const grassLoad = () => {
    //        console.log("LINE 32: We are in the grass load function");
    //        let pattern = this.ctx.createPattern(grass, 'repeat');
    //        this.ctx.fillStyle = pattern;
    //        this.ctx.fillRect(0, 400, 800, 100);
    //    };

    //    grass.onload = function () { grassLoad() };
      
      

       //dummy hero sprite for size testing
    //    const hero = new Image();
    //    hero.src = 'https://i.imgur.com/FFUUbTi.png';
    //    const heroLoad = () => {
    //        console.log("LINE 33: Drawing heroic rectangle");
    //     //    this.ctx.drawImage(hero, 350, 350);
    //     this.ctx.fillStyle="black";
    //     this.ctx.fillRect(350, 300, 75, 150);
    //    };
    //    console.log("LINE 37: Past the hero load");
    //    window.heroLoad = window.heroLoad;
    //    hero.onload = () => { heroLoad() };

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


