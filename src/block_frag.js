const ULA = new Image();
ULA.src = "./fragtemp.png";
const ULB = new Image();
ULB.src = "./fragtemp.png";
const ULC = new Image();
ULC.src = "./fragtemp.png";
const ULD = new Image();
ULD.src = "./fragtemp.png";

const URA = new Image();
URA.src = "./fragtemp.png";
const URB = new Image();
URB.src = "./fragtemp.png";
const URC = new Image();
URC.src = "./fragtemp.png";
const URD = new Image();
URD.src = "./fragtemp.png";

const DLA = new Image();
DLA.src = "./fragtemp.png";
const DLB = new Image();
DLB.src = "./fragtemp.png";
const DLC = new Image();
DLC.src = "./fragtemp.png";
const DLD = new Image();
DLD.src = "./fragtemp.png";

const DRA = new Image();
DRA.src = "./fragtemp.png";
const DRB = new Image();
DRB.src = "./fragtemp.png";
const DRC = new Image();
DRC.src = "./fragtemp.png";
const DRD = new Image();
DRD.src = "./fragtemp.png";

const IMAGES = {
    "ULA": ULA, "URA": URA, "DLA": DLA, "DRA": DRA, 
    "ULB": ULB, "URB": URB, "DLB": DLB, "DRB": DRB,
    "ULC": ULC, "URC": URC, "DLC": DLC, "DRC": DRC,
    "ULD": ULD, "URD": URD, "DLD": DLD, "DRD": DRD
};


class BlockFragment {
  

    constructor(params){
        this.imgCode = params.imgCode;
        this.image = IMAGES[params.imgCode];
        this.image.style.position = "relative";       
        this.image.style.zIndex = 9000;
        //  debugger;
        this.setSpeed();
        this.posX = params.posX;
        this.posY = params.posY;
        this.image.width = 25;
        this.image.height = 25;
        this.game = params.game;
       if (!this.image.complete) {
           this.image.onload = () => {
            this.loaded = true;
        };
    } else {
        this.loaded = true;
    }
        console.log("Block fragment created.")
        this.game.fragments.push(this);
        this.draw = this.draw.bind(this);

    }

    setSpeed(){
        switch(this.imgCode){

           case "ULA": 
             this.speedX = -17;
             this.speedY = -17;
             break;
           case "ULB":
              this.speedX = -12;
              this.speedY = -15;
                break;
           case "ULC":
              this.speedX = -15;
              this.speedY = -10;
                break;
           case "ULD": 
                this.speedX = -5;
                this.speedY = -20;
                break;

               case "URA":
             this.speedY = -12;
             this.speedX = 15;
                break;
           case "URB":
             this.speedX =   17;
             this.speedY = - 17;
                break;
        //center block
           case "URC":
           this.speedX = 5;
           this.speedY = -20;
           break;

           case "URD": 
               this.speedX = 15;
               this.speedY = -10
                break;
        //center block
        //    case DRA:

           case "DRB":
            this.speedX = 15;
            this.speedY = 0;
                break;
           case "DRC":
             this.speedY = 15;
             this.speedX = 0;
                break;
           case "DRD":
             this.speedX = 15;
             this.speedY = 15;
                break;

           case "DLA":
           this.speedX = -15;
           this.speedY = 0;
                break;
        //    case DLB:
           case "DLC":
            this.speedY = 15;
            this.speedX = -15
                break;
           case "DLD":
             this.speedY = 15;
             this.speedX = 0;
                break;
        }
    }

    update(ctx){

         if (this.posX < 0 || this.posY < 0 || this.posX > 800 || this.posY > 500){
             this.remove();
         }
        else {
            this.posX += this.speedX;
            this.posY += this.speedY;
            console.log("Fragment Location:", this.posX, this.posY);
            this.draw(ctx);
        }
   
    }

    draw(ctx) {
        if (this.loaded) {
            ctx.drawImage(this.image, this.posX, this.posY);
        }
    }

    remove(){
        this.game.remove(this);
    }
}

module.exports = BlockFragment;