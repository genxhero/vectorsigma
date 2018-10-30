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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//import GameBoard from './game_board';
// import HeroSprite from './hero_sprite';
var HeroSprite = __webpack_require__(/*! ./hero_sprite */ "./src/hero_sprite.js"); // SPECIAL THANKS TO PAUL IRISH!


window.requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
}();

document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  window.ctx = ctx; // ctx.fillRect(0, 0, 800, 600);

  var grass = new Image();
  grass.src = 'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/2824633/300/200/m1/fpnw/wm0/1601.m10.i311.n029.s.c10.164511620-seamles-.jpg?1497007612&s=843a14180b1390bf4585dd7e668e1683';

  var myLoad = function myLoad() {
    console.log("We are in the my load function");
    var pattern = ctx.createPattern(grass, 'repeat');
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 400, 800, 100);
  };

  grass.onload = function () {
    myLoad();
  };

  var sky = new Image();
  sky.src = 'https://i.imgur.com/MbBpcOx.png';

  var skyLoad = function skyLoad() {
    console.log("I'm loading the sky"); //   let skyImage = ctx.drawImage(sky);
    //   ctx.fillStyle = skyImage;

    ctx.drawImage(sky, 0, -50);
  };

  sky.onload = function () {
    skyLoad();
  };
});

/***/ }),

/***/ "./src/hero_sprite.js":
/*!****************************!*\
  !*** ./src/hero_sprite.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeroSprite = function HeroSprite() {
  _classCallCheck(this, HeroSprite);

  this.image = "https://i.imgur.com/FFUUbTi.png";
  this.hp = 100;
};

module.exports = HeroSprite;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map