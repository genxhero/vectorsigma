//import GameBoard from './game_board';
// import HeroSprite from './hero_sprite';
const HeroSprite = require("./hero_sprite");



// SPECIAL THANKS TO PAUL IRISH!
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})(); 


document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    window.ctx = ctx;
    // ctx.fillRect(0, 0, 800, 600);

    const grass = new Image();
    grass.src = 'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/2824633/300/200/m1/fpnw/wm0/1601.m10.i311.n029.s.c10.164511620-seamles-.jpg?1497007612&s=843a14180b1390bf4585dd7e668e1683';

    const myLoad = () => {
        console.log("We are in the my load function");
        let pattern = ctx.createPattern(grass, 'repeat');
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 400, 800, 100);
    };

    grass.onload = function () { myLoad() };

    const sky = new Image();
    sky.src = 'https://i.imgur.com/MbBpcOx.png';
    const skyLoad = () => {
        console.log("I'm loading the sky");
        //   let skyImage = ctx.drawImage(sky);
        //   ctx.fillStyle = skyImage;
        ctx.drawImage(sky, 0, -50);
    };

    sky.onload = function () { skyLoad() };

});