const GameSprite = require('./game_sprite');

class HeroSprite extends GameSprite {
    constructor(options){
        super(options);
        const image = new Image();
        image.src = "https://i.imgur.com/p25KSOI.png";
        this.image = image;
    }

    
}

module.exports = HeroSprite;