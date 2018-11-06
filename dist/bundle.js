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
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/aarongoddard/Documents/Coding/vectorsigma/src/game.js: Unexpected token (79:20)\n\n\u001b[0m \u001b[90m 77 | \u001b[39m                  \u001b[36mif\u001b[39m (hitPojo\u001b[33m.\u001b[39mtype \u001b[33m!=\u001b[39m \u001b[32m\"overhead\"\u001b[39m)\u001b[0m\n\u001b[0m \u001b[90m 78 | \u001b[39m                    \u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 79 | \u001b[39m                    let type \u001b[33m=\u001b[39m hitPojo\u001b[33m.\u001b[39mtype\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 80 | \u001b[39m                    \u001b[0m\n\u001b[0m \u001b[90m 81 | \u001b[39m                    let hit \u001b[33m=\u001b[39m striker\u001b[33m.\u001b[39mhandleCollision(strikee\u001b[33m,\u001b[39m hitPojo)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 82 | \u001b[39m                    \u001b[36mif\u001b[39m (hit) \u001b[36mreturn\u001b[39m \u001b[33m;\u001b[39m\u001b[0m\n    at _class.raise (/Users/aarongoddard/Documents/Coding/vectorsigma/node_modules/@babel/parser/lib/index.js:3939:15)\n    at _class.unexpected (/Users/aarongoddard/Documents/Coding/vectorsigma/node_modules/@babel/parser/lib/index.js:5248:16)\n    at _class.parseStatementContent (/Users/aarongoddard/Documents/Coding/vectorsigma/node_modules/@babel/parser/lib/index.js:7200:32)\n    at _class.parseStatement (/Users/aarongoddard/Documents/Coding/vectorsigma/node_modules/@babel/parser/lib/index.js:7153:17)\n    at _class.parseIfStatement (/Users/aarongoddard/Documents/Coding/vectorsigma/node_modules/@babel/parser/lib/index.js:7493:28)\n    at _class.parseStatementContent (/Users/aarongoddard/Documents/Coding/vectorsigma/node_modules/@babel/parser/lib/index.js:7184:21)\n    at _class.parseStatement (/Users/aarongoddard/Documents/Coding/vectorsigma/node_modules/@babel/parser/lib/index.js:7153:17)\n    at _class.parseBlockOrModuleBlockBody (/Users/aarongoddard/Documents/Coding/vectorsigma/node_modules/@babel/parser/lib/index.js:7707:23)\n    at _class.parseBlockBody (/Users/aarongoddard/Documents/Coding/vectorsigma/node_modules/@babel/parser/lib/index.js:7694:10)\n    at _class.parseBlock (/Users/aarongoddard/Documents/Coding/vectorsigma/node_modules/@babel/parser/lib/index.js:7683:10)\n    at _class.parseStatementContent (/Users/aarongoddard/Documents/Coding/vectorsigma/node_modules/@babel/parser/lib/index.js:7212:21)\n    at _class.parseStatement (/Users/aarongoddard/Documents/Coding/vectorsigma/node_modules/@babel/parser/lib/index.js:7153:17)\n    at _class.parseIfStatement (/Users/aarongoddard/Documents/Coding/vectorsigma/node_modules/@babel/parser/lib/index.js:7493:28)\n    at _class.parseStatementContent (/Users/aarongoddard/Documents/Coding/vectorsigma/node_modules/@babel/parser/lib/index.js:7184:21)\n    at _class.parseStatement (/Users/aarongoddard/Documents/Coding/vectorsigma/node_modules/@babel/parser/lib/index.js:7153:17)\n    at _class.parseBlockOrModuleBlockBody (/Users/aarongoddard/Documents/Coding/vectorsigma/node_modules/@babel/parser/lib/index.js:7707:23)\n    at _class.parseBlockBody (/Users/aarongoddard/Documents/Coding/vectorsigma/node_modules/@babel/parser/lib/index.js:7694:10)\n    at _class.parseBlock (/Users/aarongoddard/Documents/Coding/vectorsigma/node_modules/@babel/parser/lib/index.js:7683:10)\n    at _class.parseStatementContent (/Users/aarongoddard/Documents/Coding/vectorsigma/node_modules/@babel/parser/lib/index.js:7212:21)\n    at _class.parseStatement (/Users/aarongoddard/Documents/Coding/vectorsigma/node_modules/@babel/parser/lib/index.js:7153:17)\n    at _class.parseFor (/Users/aarongoddard/Documents/Coding/vectorsigma/node_modules/@babel/parser/lib/index.js:7741:22)\n    at _class.parseForStatement (/Users/aarongoddard/Documents/Coding/vectorsigma/node_modules/@babel/parser/lib/index.js:7461:19)\n    at _class.parseStatementContent (/Users/aarongoddard/Documents/Coding/vectorsigma/node_modules/@babel/parser/lib/index.js:7172:21)\n    at _class.parseStatement (/Users/aarongoddard/Documents/Coding/vectorsigma/node_modules/@babel/parser/lib/index.js:7153:17)\n    at _class.parseBlockOrModuleBlockBody (/Users/aarongoddard/Documents/Coding/vectorsigma/node_modules/@babel/parser/lib/index.js:7707:23)\n    at _class.parseBlockBody (/Users/aarongoddard/Documents/Coding/vectorsigma/node_modules/@babel/parser/lib/index.js:7694:10)\n    at _class.parseBlock (/Users/aarongoddard/Documents/Coding/vectorsigma/node_modules/@babel/parser/lib/index.js:7683:10)\n    at _class.parseStatementContent (/Users/aarongoddard/Documents/Coding/vectorsigma/node_modules/@babel/parser/lib/index.js:7212:21)\n    at _class.parseStatement (/Users/aarongoddard/Documents/Coding/vectorsigma/node_modules/@babel/parser/lib/index.js:7153:17)\n    at _class.parseFor (/Users/aarongoddard/Documents/Coding/vectorsigma/node_modules/@babel/parser/lib/index.js:7741:22)");

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
  KI: 75,
  PUNCH: 80,
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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map