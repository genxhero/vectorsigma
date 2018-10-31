/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/hedronattack.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// const EvilBlock = require('./evil_block');
//const KiOrb = require('./ki_orb');
var HeroSprite = __webpack_require__(/*! ./hero_sprite */ "./src/hero_sprite.js");

var Game =
/*#__PURE__*/
function () {
  function Game(ctx, Key) {
    _classCallCheck(this, Game);

    this.blocks = [];
    this.kiOrbs = [];
    this.ctx = ctx;
    this.Key = Key;
    alert(this.Key);
    this.drawField();
    this.grassLoaded = false;
    this.skyLoaded = false;
    this.pillarsLoaded = false;
    this.drawFrame.bind(this)();
  }

  _createClass(Game, [{
    key: "addHero",
    value: function addHero() {
      var hero = new HeroSprite({
        game: this,
        posX: 350,
        posY: 300
      }); //   debugger;

      this.hero = hero;
      hero.draw(this.ctx);
    }
  }, {
    key: "addBlocks",
    value: function addBlocks() {}
  }, {
    key: "addKiOrbs",
    value: function addKiOrbs() {}
  }, {
    key: "grassLoad",
    value: function grassLoad() {
      var _this = this;

      this.grass = new Image();
      this.grass.src = 'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/2824633/300/200/m1/fpnw/wm0/1601.m10.i311.n029.s.c10.164511620-seamles-.jpg?1497007612&s=843a14180b1390bf4585dd7e668e1683';

      var grassLoad = function grassLoad() {
        console.log("LINE 32: We are in the grass load function");

        var pattern = _this.ctx.createPattern(_this.grass, 'repeat');

        _this.ctx.fillStyle = pattern;

        _this.ctx.fillRect(0, 400, 800, 100);
      };

      this.grass.onload = function () {
        grassLoad();
      };
    }
  }, {
    key: "skyLoad",
    value: function skyLoad() {
      var _this2 = this;

      this.sky = new Image();
      this.sky.src = 'https://i.imgur.com/MbBpcOx.png';

      var skyLoad = function skyLoad() {
        _this2.ctx.drawImage(_this2.sky, 0, -50);
      };

      this.sky.onload = function () {
        skyLoad();
      };
    }
  }, {
    key: "loadPillars",
    value: function loadPillars() {
      var _this3 = this;

      this.leftPillar = new Image();
      this.leftPillar.src = "https://i.imgur.com/UibkSXB.png";
      this.rightPillar = new Image();
      this.rightPillar.src = "https://i.imgur.com/UibkSXB.png";

      var loadPillars = function loadPillars() {
        _this3.ctx.drawImage(_this3.leftPillar, 0, 0);

        _this3.ctx.drawImage(_this3.rightPillar, 750, 0);
      };

      this.rightPillar.onload = function () {
        loadPillars();
      };

      this.leftPillar.onload = function () {
        loadPillars();
      };
    }
  }, {
    key: "dummyBlocks",
    value: function dummyBlocks() {
      for (var squares = 0; squares < 5; squares++) {
        var x = squares * 110 + Math.random() * 800;
        var y = 100;
        this.ctx.fillStyle = "gray";
        this.ctx.fillRect(x, y, 100, 100);
      }
    }
  }, {
    key: "drawField",
    value: function drawField() {
      this.grassLoad();
      this.skyLoad();
      this.loadPillars();
      this.dummyBlocks();
      this.addHero();
    }
  }, {
    key: "drawFrame",
    value: function drawFrame() {
      requestAnimationFrame(this.drawFrame.bind(this));
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      var pattern = this.ctx.createPattern(this.grass, 'repeat');
      this.ctx.fillStyle = pattern;
      this.ctx.fillRect(0, 400, 800, 100);
      this.ctx.drawImage(this.sky, 0, -50);
      this.ctx.drawImage(this.leftPillar, 0, 0);
      this.ctx.drawImage(this.rightPillar, 750, 0);
      this.hero.update(this.Key);
      this.hero.draw(this.ctx);
    }
  }]);

  return Game;
}();

module.exports = Game; // SPECIAL THANKS TO PAUL IRISH FOR HIS BOILERPLATE FUNCTION!
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

/***/ }),

/***/ "./src/game_field.js":
/*!***************************!*\
  !*** ./src/game_field.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// document.addEventListener("DOMContentLoaded", () => {
//     const grass = new Image();
//     grass.src = 'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/2824633/300/200/m1/fpnw/wm0/1601.m10.i311.n029.s.c10.164511620-seamles-.jpg?1497007612&s=843a14180b1390bf4585dd7e668e1683';
//     const grassLoad = () => {
//         console.log("LINE 32: We are in the grass load function");
//         let pattern = ctx.createPattern(grass, 'repeat');
//         ctx.fillStyle = pattern;
//         ctx.fillRect(0, 400, 800, 100);
//     };
//     grass.onload = function () { grassLoad() };
//     const sky = new Image();
//     sky.src = 'https://i.imgur.com/MbBpcOx.png';
//     const skyLoad = () => {
//         console.log("LINE 21: I'm loading the sky");
//         ctx.drawImage(sky, 0, -50);
//     };
//     sky.onload = function () { skyLoad() };
//     console.log
//     //dummy hero sprite for size testing
//     const hero = new Image();
//     hero.src = 'https://i.imgur.com/FFUUbTi.png';
//     const heroLoad = () => {
//         console.log("LINE 33: Drawing heroic rectangle");
//         ctx.drawImage(hero, 350, 350);
//         //ctx.fillRect(350, 300, 100, 150);
//     };
//     console.log("LINE 37: Past the hero load");
//     window.heroLoad = window.heroLoad;
//     hero.onload = () => { heroLoad() };
//     for (let squares = 0; squares < 5; squares++) {
//         let x = (squares * 110) + Math.random;
//         let y = 10;
//         ctx.fillStyle = "gray";
//         ctx.fillRect(x, y, 100, 100);
//     }
// });

/***/ }),

/***/ "./src/game_sprite.js":
/*!****************************!*\
  !*** ./src/game_sprite.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GameSprite =
/*#__PURE__*/
function () {
  function GameSprite(params) {
    _classCallCheck(this, GameSprite);

    this.posX = params.posX;
    this.posY = params.posY;
    this.hitboxWidth = params.hitboxWidth;
    this.hitboxHeight = params.hitboxHeight;
    this.speed = params.speed;
    this.image = params.image;
    this.game = params.game;
  }

  _createClass(GameSprite, [{
    key: "handleCollision",
    value: function handleCollision(obstacle) {}
  }, {
    key: "draw",
    value: function draw(ctx) {
      console.log(this.image);
      console.log("X: ".concat(this.posX, ", Y: ").concat(this.posY));
      ctx.drawImage(this.image, this.posX, this.posY);
    }
  }, {
    key: "hitDetected",
    value: function hitDetected(obstacle) {
      if (this.posY + this.hitboxHeight / 2 >= obstacle.hitboxHeight && obstacle.posX === this.posx) {} else {
        return false;
      }
    }
  }, {
    key: "distance",
    value: function distance(pos1, pos2) {
      return Math.sqrt(Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2));
    }
  }]);

  return GameSprite;
}();

module.exports = GameSprite;

/***/ }),

/***/ "./src/hedronattack.js":
/*!*****************************!*\
  !*** ./src/hedronattack.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Game = __webpack_require__(/*! ./game */ "./src/game.js");

var GameField = __webpack_require__(/*! ./game_field */ "./src/game_field.js");

var Key = {
  //Special thanks to Arthur Schreiber
  _pressed: {},
  LEFT: 65,
  RIGHT: 68,
  isDown: function isDown(keyCode) {
    return this._pressed[keyCode];
  },
  onKeydown: function onKeydown(event) {
    this._pressed[event.keyCode] = true;
  },
  onKeyup: function onKeyup(event) {
    delete this._pressed[event.keyCode];
  }
};
window.addEventListener('keyup', function (event) {
  Key.onKeyup(event);
}, false);
window.addEventListener('keydown', function (event) {
  Key.onKeydown(event);
}, false);
document.addEventListener("DOMContentLoaded", function () {
  //   window.Key = Key;
  console.log("Key:", Key);
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var game = new Game(ctx, Key); // game.drawField();

  window.ctx = ctx; // document.onkeydown = (e) => {
  //     if (game.hero) {
  //         game.hero.move(e, ctx);
  //     }
  // };
});

/***/ }),

/***/ "./src/hero_sprite.js":
/*!****************************!*\
  !*** ./src/hero_sprite.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var GameSprite = __webpack_require__(/*! ./game_sprite */ "./src/game_sprite.js");

var HeroSprite =
/*#__PURE__*/
function (_GameSprite) {
  _inherits(HeroSprite, _GameSprite);

  function HeroSprite(options) {
    var _this;

    _classCallCheck(this, HeroSprite);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HeroSprite).call(this, options));
    _this.speed = 0;
    var image = new Image();
    image.src = "https://i.imgur.com/JsuhqcT.png"; //i.imgur.com/JsuhqcT.png

    https: image.height = 150;

    image.width = 75;
    _this.image = image;
    _this.draw = _this.draw.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.image.onload = function () {
      _this.loaded = true;
    };

    return _this;
  }

  _createClass(HeroSprite, [{
    key: "draw",
    value: function draw(ctx) {
      // console.log(this.image);
      // console.log(`X: ${this.posX}, Y: ${this.posY}`);
      if (this.loaded) {
        ctx.drawImage(this.image, this.posX, this.posY);
      }
    }
  }, {
    key: "goLeft",
    value: function goLeft() {
      if (this.posX > 50) {
        this.posX -= 5;
      }

      this.draw(ctx); // this.game.drawFrame();
    }
  }, {
    key: "goRight",
    value: function goRight() {
      if (this.posX + 75 < ctx.canvas.width - 50) {
        this.posX += 5;
      }

      this.draw(ctx); // this.game.drawFrame();
    }
  }, {
    key: "update",
    value: function update(Key) {
      // console.log(Key);
      if (Key.isDown(Key.LEFT)) this.goLeft();
      if (Key.isDown(Key.RIGHT)) this.goRight();
    }
  }]);

  return HeroSprite;
}(GameSprite);

module.exports = HeroSprite;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map