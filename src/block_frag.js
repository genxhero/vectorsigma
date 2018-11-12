const ULA = new Image();
ULA.src = "../fragtemp.png";
const ULB = new Image();
ULB.src = "../fragtemp.png";
const ULC = new Image();
ULC.src = "../fragtemp.png";
const ULD = new Image();
ULD.src = "../fragtemp.png";

const URA = new Image();
URA.src = "../fragtemp.png";
const URB = new Image();
URB.src = "../fragtemp.png";
const URC = new Image();
URC.src = "../fragtemp.png";
const URD = new Image();
URD.src = "../fragtemp.png";

const DLA = new Image();
DLA.src = "../fragtemp.png";
const DLB = new Image();
DLB.src = "../fragtemp.png";
const DLC = new Image();
DLC.src = "../fragtemp.png";
const DLD = new Image();
DLD.src = "../fragtemp.png";

const DRA = new Image();
DRA.src = "../fragtemp.png";
const DRB = new Image();
DRB.src = "../fragtemp.png";
const DRC = new Image();
DRC.src = "../fragtemp.png";
const DRD = new Image();
DRD.src = "../fragtemp.png";

const IMAGES = {
    "ULA": ULA, "URA": URA, "DLA": DLA, "DRA": DRA, 
    "ULB": ULB, "URB": URB, "DLB": DLB, "DRB": DRB,
    "ULC": ULC, "URC": URC, "DLC": DLC, "DRC": DRC,
    "ULD": ULD, "URD": URD, "DLD": DLD, "DRD": DRD
};


class BlockFragment {
  

    constructor(params){
        this.setSpeed();
        this.image = IMAGES[params.imgCode];
        this.image.onload = () => {
            this.loaded = true;
        };
    }

    setSpeed(){
        switch(this.image){
           case ULA: 
             this.speedX = -15;
             this.speedY = -15;
           case ULB:
              this.speedX = 0;
              this.speedY = -15;
           case ULC:
              this.speedX = -15;
              this.speedY = -10;
           case ULD: 
               this.speedX = -15;
               this.speedY = -15;
           
               case URA:
             this.speedY = -15;
             this.speedX = 0;
           case URB:
             this.speedX =   15;
             this.speedY = - 15;
        //center block
        //    case URC:
           case URD: 
               this.speedX = 15;
               this.speedY = -10
        //center block
        //    case DRA:

           case DRB:
            this.speedX = 15;
            this.speedY = 0;
           case DRC:
             this.speedY = 15;
             this.speedX = 0;
           case DRD:
             this.speedX = 15;
             this.speedY = 15;

           case DLA:
           this.speedX = -15;
           this.speedY = 0;
        //    case DLB:
           case DLC:
            this.speedY = 15;
            this.speedX = -15
           case DLD:
             this.speedY = 15;
             this.speedX = 0;
        }
    }

    update(ctx){
        this.posX += this.speedX;
        this.posY += this.speedY;
        this.draw(ctx);
    }

    draw(ctx) {
        if (this.loaded) {
            ctx.drawImage(this.image, this.posX, this.posY);
        }
    }
}

module.exports = BlockFragment;