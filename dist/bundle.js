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

/***/ "./src/evil_block.js":
/*!***************************!*\
  !*** ./src/evil_block.js ***!
  \***************************/
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

var HeroSprite = __webpack_require__(/*! ./hero_sprite */ "./src/hero_sprite.js");

var EvilBlock =
/*#__PURE__*/
function (_GameSprite) {
  _inherits(EvilBlock, _GameSprite);

  function EvilBlock(params) {
    var _this;

    _classCallCheck(this, EvilBlock);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EvilBlock).call(this, params));
    _this.hitboxHeight = 100;
    _this.hitboxWidth = 100;
    var blockImage = new Image();
    blockImage.src = "https://i.imgur.com/vlgHgAL.png";
    blockImage.height = 100;
    blockImage.width = 100;
    _this.image = blockImage;
    _this.draw = _this.draw.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.image.onload = function () {
      _this.loaded = true;
    };

    return _this;
  }

  _createClass(EvilBlock, [{
    key: "draw",
    value: function draw(ctx) {
      if (this.loaded) {
        ctx.drawImage(this.image, this.posX, this.posY);
      }
    }
  }, {
    key: "handleCollision",
    value: function handleCollision(obstacle) {
      console.log("block hit something");

      if (obstacle instanceof HeroSprite) {
        obstacle.takeDamage();
        this.remove();
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      this.game.remove(this);
    }
  }, {
    key: "update",
    value: function update(ctx) {
      if (this.posY + 100 < 450) {
        this.posY += 10;
        this.draw(ctx);
      } else if (this.posY === 450) {
        this.ctx.fillStyle = "brown";
        this.fillRect(this.posX, 550, 100, 50);
      }
    }
  }]);

  return EvilBlock;
}(GameSprite);

module.exports = EvilBlock;

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EvilBlock = __webpack_require__(/*! ./evil_block */ "./src/evil_block.js"); //const KiOrb = require('./ki_orb');


var HeroSprite = __webpack_require__(/*! ./hero_sprite */ "./src/hero_sprite.js");

var Game =
/*#__PURE__*/
function () {
  function Game(ctx, Key) {
    _classCallCheck(this, Game);

    this.blocks = [];
    this.addBlock = this.addBlock.bind(this);
    this.kiOrbs = [];
    this.ctx = ctx;
    this.Key = Key; // alert(this.Key);

    this.drawField();
    this.grassLoaded = false;
    this.skyLoaded = false;
    this.pillarsLoaded = false;
    this.drawFrame.bind(this)();
  }

  _createClass(Game, [{
    key: "allSprites",
    value: function allSprites() {
      return [].concat([this.hero], this.blocks);
    }
  }, {
    key: "detectCollision",
    value: function detectCollision() {
      var sprites = this.allSprites();

      for (var idx1 = 0; idx1 < sprites.length; idx1++) {
        for (var idx2 = 0; idx2 < sprites.length; idx2++) {
          var striker = sprites[idx1];
          var strikee = sprites[idx2];

          if (striker instanceof EvilBlock && strikee instanceof EvilBlock) {
            continue;
          }

          if (striker.hitDetected(strikee)) {
            var hit = striker.handleCollision(strikee);
            if (hit) return;
          }
        }
      }
    }
  }, {
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
    key: "addBlock",
    value: function addBlock() {
      var newBlock = new EvilBlock({
        game: this,
        posY: -50,
        posX: Math.floor(Math.random() * 600) + 50
      });
      this.blocks.push(newBlock);
      newBlock.draw(this.ctx);
    }
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
    key: "moveBlocks",
    value: function moveBlocks() {
      for (i in this.blocks) {
        this.blocks[i].update(this.ctx);
      }
    }
  }, {
    key: "drawField",
    value: function drawField() {
      var _this4 = this;

      this.grassLoad();
      this.skyLoad();
      this.loadPillars(); // this.addBlock();

      setInterval(function () {
        return _this4.addBlock();
      }, 500);
      this.addHero();
      alert("The evil Hedronites are making a desperate attack! Fight, Kam! For great justice!");
    }
  }, {
    key: "drawFrame",
    value: function drawFrame() {
      requestAnimationFrame(this.drawFrame.bind(this));
      this.detectCollision();
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      var pattern = this.ctx.createPattern(this.grass, 'repeat');
      this.ctx.fillStyle = pattern;
      this.ctx.fillRect(0, 400, 800, 100);
      this.ctx.drawImage(this.sky, 0, -50);
      this.ctx.drawImage(this.leftPillar, 0, 0);
      this.ctx.drawImage(this.rightPillar, 750, 0);
      this.moveBlocks();
      this.hero.update(this.Key);
      this.hero.draw(this.ctx);
    }
  }, {
    key: "remove",
    value: function remove(sprite) {
      if (sprite instanceof EvilBlock) {
        this.blocks.splice(this.blocks.indexOf(sprite), 1);
      }
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
      if (this === obstacle) {
        return false;
      }

      if (this.posX >= obstacle.hitboxWidth && this.posX < obstacle.posX + obstacle.hitboxWidth && // this.posX + this.hitboxWidth <= (obstacle.posX + obstacle.hitboxWidth) && 
      this.posX + this.hitboxWidth > obstacle.posX && this.posY + this.hitboxHeight - 30 === obstacle.posY) {
        return true;
      } else {
        return false;
      }
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
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var game = new Game(ctx, Key); // game.drawField();

  window.ctx = ctx;
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
    _this.hp = 100;
    var image = new Image();
    image.src = "https://i.imgur.com/JsuhqcT.png";
    image.height = 150;
    image.width = 75;
    _this.hitboxHeight = 150;
    _this.hitboxWidth = 75;
    _this.image = image;
    _this.draw = _this.draw.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.image.onload = function () {
      _this.loaded = true;
    };

    return _this;
  }

  _createClass(HeroSprite, [{
    key: "stillAlive",
    value: function stillAlive() {
      if (this.hp > 0) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "takeDamage",
    value: function takeDamage() {
      console.log("Took 25 points of damage");
      this.hp -= 20;

      if (this.stillAlive()) {
        var grunt = new Audio();
        grunt.src = "https://s3.us-east-2.amazonaws.com/hedronattack/kam_pain.m4a";
        grunt.play();
      } else {
        var deathCry = new Audio();
        deathCry.src = "https://s3.us-east-2.amazonaws.com/hedronattack/kam_death_take_1.m4a";
        deathCry.play();
      }
    }
  }, {
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
        this.posX -= 12;
      }

      this.draw(ctx); // this.game.drawFrame();
    }
  }, {
    key: "goRight",
    value: function goRight() {
      if (this.posX + 75 < ctx.canvas.width - 50) {
        this.posX += 12;
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
  }, {
    key: "remove",
    value: function remove(object) {
      if (object instanceof EvilBlock) {
        this.blocks.splice(this.blocks.indexOf(object), 1);
      }
    }
  }]);

  return HeroSprite;
}(GameSprite);

module.exports = HeroSprite;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map