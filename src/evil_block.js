const GameSprite = require('./game_sprite');

const blockImage = new Image();
blockImage.src = "https://i.imgur.com/vlgHgAL.png";

class EvilBlock extends GameSprite {
    constructor(params = {} ){
        this.image = blockImage;
        this.hitboxHeight = 100;
        this.hitboxWidth = 100;
        super(params)
    }

}
module.exports = EvilBlock;