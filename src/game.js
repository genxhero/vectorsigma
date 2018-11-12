const EvilBlock = require('./evil_block');
const PowerOrb = require('./ki_orb');
const HeroSprite = require('./hero_sprite');
const KiBlast = require('./ki_blash');
const Punch = require('./punch');
const LandBlock = require('./land_block');
const BlockFragment = require('./block_frag');

class Game {
    constructor(ctx, Key){
        this.fragments =[];
        this.over = false;
        this.paused = false;
        this.blockLocations = [];
        this.collected = 0;
        this.punches = [];
        this.lastBlockX = 300;
        this.blocks = [];
        this.landblocks = [];
        this.addBlock = this.addBlock.bind(this);
        this.powerOrbs = [];
        this.kiBlasts = [];
        this.ctx = ctx;
        this.pause = this.pause.bind(this);
        this.Key = Key;
        // alert(this.Key);
        this.drawField = this.drawField.bind(this);
        this.grassLoaded = false;
        this.skyLoaded = false;
        this.pillarsLoaded=false;
        
        // this.drawFrame.bind(this)();
        //ABOVE LINE MIGRATED TO "START"
        this.start();
        this.pause = this.pause.bind(this);
    }

    pause(){
             //32
             if(this.paused && this.over === false) {
                 this.paused = false;
                 this.bgm.play();
                 this.drawFrame();
                 
                //  setInterval(() => this.addPowerOrbs(), 2000);
                //  setInterval(() => this.addBlock(), 500);
             } else {
                  this.paused = true;
                  this.bgm.pause();
                //  clearInterval(() => this.addPowerOrbs());
                //  clearInterval(() => this.addBlock());
             }
    }

    allSprites() {
        return [].concat([this.hero], this.blocks, this.kiBlasts, this.punches, this.landblocks, this.powerOrbs, this.fragments);
       
    }

    detectCollision(){
        const sprites = this.allSprites();
        // debugger;
        for (let idx1 = 0; idx1 < sprites.length; idx1++){
            for (let idx2 = 0; idx2 < sprites.length; idx2++ ){
                
                let striker = sprites[idx1];
                let strikee = sprites[idx2];
                if (idx1 === idx2) {
                    continue;
                }
                if (striker instanceof EvilBlock && strikee instanceof EvilBlock) {
                    continue;
                }

                if (striker instanceof KiBlast && strikee instanceof KiBlast) {
                    continue;
                }

                if (striker instanceof HeroSprite && strikee instanceof HeroSprite) {
                    continue;
                }

                if (striker instanceof Punch && strikee instanceof Punch) {
                    continue;
                }
                if (striker instanceof PowerOrb && strikee instanceof PowerOrb) {
                    continue;
                }

                if (striker instanceof HeroSprite && strikee instanceof Punch) {
                    continue;
                }

                if (striker instanceof Punch && strikee instanceof HeroSprite) {
                    continue;
                }

                if (striker instanceof BlockFragment) {
                    continue;
                }
                let hitPojo = striker.hitDetected(strikee);
                if (hitPojo.hit){
                //   if (hitPojo.type != "overhead")
                //    { 
                //        console.log(hitPojo);
                //     }
                    
                    let type = hitPojo.type;
                    
                    let hit = striker.handleCollision(strikee, hitPojo);
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
        if (!this.paused){
       let newBlock = new EvilBlock({
         game: this,
         posY: -50,
         posX: Math.floor(Math.random() * 600) + 50
       });
       this.blocks.push(newBlock);
       newBlock.draw(this.ctx);}
    }

    addPowerOrbs(){
        if (!this.paused) {
        let newOrb = new PowerOrb({
            game: this,
            posY: -50,
            posX: Math.floor(Math.random() * 600) + 50
        });
        this.powerOrbs.push(newOrb);
        newOrb.draw(this.ctx);}
    }

    



    grassLoad(){

        this.grass = new Image();
        this.grass.src = "https://i.imgur.com/HsQzaSO.png";
        // this.grass.src = 'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/2824633/300/200/m1/fpnw/wm0/1601.m10.i311.n029.s.c10.164511620-seamles-.jpg?1497007612&s=843a14180b1390bf4585dd7e668e1683';
        const grassLoad = () => {
            let pattern = this.ctx.createPattern(this.grass, 'repeat');
            this.ctx.fillStyle = pattern;
            this.ctx.fillRect(0, 400, 800, 100);
        };
        this.grass.onload = function () { grassLoad() };
     }

    skyLoad(){
        this.sky = new Image();
        // this.sky.src = 'https://i.imgur.com/MbBpcOx.png';
        this.sky.src = "https://i.imgur.com/qwm8SZo.png";
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

    moveFrags(){
        for (i in this.fragments) {
            this.fragments[i].update(this.ctx);
        }
    }

    moveBlasts(){
        for(i in this.kiBlasts) {
            this.kiBlasts[i].update(this.ctx);
        }
    }
  
   start(){
       document.getElementById("instructions-container").onclick = this.drawField;
       window.addEventListener('keydown', (e) => {
           var key = e.keyCode;
           if (key === 32)
           {
               this.pause();
           }
       });

   }

    
   drawField(){
       document.getElementById("instructions-container").style.visibility = "hidden";
       document.getElementById("instructions-container").style.zIndex = "1";
       this.bgm = new Audio("https://s3.us-east-2.amazonaws.com/hedronattack/brahms_bgm_short.m4a");
       this.bgm.play();
        this.grassLoad();
        this.skyLoad();
        this.loadPillars();
        
        // back to 500 after testing.
       setInterval(() => this.addPowerOrbs(), 2000);
       setInterval(() => this.addBlock(), 500);
        this.addHero();
        //SEE if thisworks
       this.drawFrame.bind(this)();
    

   }

   styleHp(hp){
       if (this.hero.hp >= 80){
           hp.style.color = "chartreuse";
       } else if (this.hero.hp < 80 && this.hero.hp > 30) {
           hp.style.color = "yellow";
       } else {
           hp.style.color = "red";
       }
   }

   styleKp(kp){
       kp.style.color = "cyan";
   }

   standbyLandblocks(){
       for (i in this.landblocks) {
           this.landblocks[i].update(this.ctx);
       }
   }

   moveOrbs(){
       for (i in this.powerOrbs) {
           this.powerOrbs[i].update(this.ctx);
       }
   }

   doPunches(){
       for (i in this.punches) {
         this.punches[i].update(this.ctx);
       }
   }


   
   drawFrame(){
       if (!this.paused) {
           requestAnimationFrame(this.drawFrame.bind(this));
       
       this.detectCollision();
      //detect collsion at beginning before last change
      
           this.hero.touchingBlock = false;
           this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
           let pattern = this.ctx.createPattern(this.grass, 'repeat');
           this.ctx.fillStyle = pattern;
           this.ctx.fillRect(0, 400, 800, 100);
           let hp = document.getElementById('hero-hp')
           hp.innerText = `${this.hero.hp}`;
           this.styleHp(hp);

           let kills = document.getElementById('hero-kills');
           kills.innerText = `${this.hero.killScore}`
           let score = document.getElementById('hero-orbs');
           score.innerText = `${this.collected}`;
           let kp = document.getElementById('hero-kp');
           kp.innerText = `${this.hero.kp}`;
           this.styleKp(kp);
           this.ctx.drawImage(this.sky, 0, -50);
           this.ctx.drawImage(this.leftPillar, 0, 0);
           this.ctx.drawImage(this.rightPillar, 750, 0)
           this.moveBlocks();
           this.standbyLandblocks();
           this.moveOrbs();
           this.doPunches();
           this.hero.update(this.Key);
           this.hero.draw(this.ctx);
           this.moveBlasts();
           this.moveFrags();
           
       
    }
  
      
   }
   remove(sprite){
       if (sprite instanceof EvilBlock){
           this.blocks.splice(this.blocks.indexOf(sprite), 1);
       }
       if (sprite instanceof KiBlast){
           this.kiBlasts.splice(this.kiBlasts.indexOf(sprite), 1);
       }
       if (sprite instanceof Punch){
           this.punches.splice(this.punches.indexOf(sprite), 1);
       }
       if (sprite instanceof LandBlock){
           this.landblocks.splice(this.landblocks.indexOf(sprite), 1);
       }
       if (sprite instanceof PowerOrb ){
           this.powerOrbs.splice(this.powerOrbs.indexOf(sprite), 1);
       }

       if (sprite instanceof BlockFragment) {
           this.fragments.splice(this.fragments.indexOf(sprite), 1);
       }
   }

    grabOrb() {
        const gotone = new Audio();
        gotone.src = "https://s3.us-east-2.amazonaws.com/hedronattack/gotone.wav";
        gotone.play();
        this.collected += 1;
       
        if (this.collected === 15) {
           this.win();
        }
    }

        win(){
            this.pause();
            this.over = true;
            let info = document.getElementById('game-message');
            info.innerHTML = "A WINNER IS YOU!";
            let winModal = document.getElementById('victory-container');
            winModal.style.visibility = "visible";
            winModal.zIndex = 1000;
            let hpScore = document.getElementById('score-hp');
            hpScore.innerHTML = `Remaining Health: ${this.hero.hp} (${this.hero.hp * 100} pts)`
            let kpScore = document.getElementById('score-kp');
            kpScore.innerHTML = `Remaining Ki: ${this.hero.kp} (${this.hero.kp * 100}) pts`
            let killScore = document.getElementById('score-kills');
            killScore.innerHTML = `Hedronites Destroyed: ${this.hero.killScore} (${this.hero.killScore * 1000} pts)`;
            let totalScore = document.getElementById('score-total');
            const score = (this.hero.hp * 100) + (this.hero.kp * 100) + (this.hero.killScore * 1000)
            totalScore.innerHTML = `Total Score: ${score} pts`;
            this.ctx.fillStyle = "black";
            this.ctx.fillRect(0, 0, 800, 800);
            info.onclick = (document.location.reload);
            return;
        }

    lose() {
        // this.pause();
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, 800, 800);
        this.over = true;
        let loseModal = document.getElementById('lose-container');
        loseModal.style.visibility = "visible";

        return;
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


