const ULA = new Image();
ULA.src = "";
const ULB = new Image();
ULB.src = "";
const ULC = new Image();
ULC.src = "";
const ULD = new Image();
ULD.src = "";

const URA = new Image();
URA.src = "";
const URB = new Image();
URB.src = "";
const URC = new Image();
URC.src = "";
const URD = new Image();
URD.src = "";

const DLA = new Image();
DLA.src = "";
const DLB = new Image();
DLB.src = "";
const DLC = new Image();
DLC.src = "";
const DLD = new Image();
DLD.src = "";

const DRA = new Image();
DRA.src = "";
const DRB = new Image();
DRB.src = "";
const DRC = new Image();
DRC.src = "";
const DRD = new Image();
DRD.src = "";

const IMAGES = {"UL": UL, "UR": UR, "DL": DL, "DR": DR};


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
        //    case URC:
           case URD: 
               this.speedX = 15;
               this.speedY = -10
           case DRA:
           case DRB:
           case DRC:
           case DRD:

           case DLA:
           case DLB:
           case DLC:
           case DLD:
        }
    }

    update(ctx){
        this.posX += this.speedX;
        this.posY += this.speedY;
        this.draw(ctx);
    }

    draw(ctx){

    }
}

module.exports = BlockFragment;