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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Card = function () {
  function Card(ctx, canvas, num) {
    var pos = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

    _classCallCheck(this, Card);

    this.ctx = ctx;
    this.canvas = canvas;
    this.num = num;
    this.gPos = pos[0];
    this.pPos = pos[1];
    this.rPos = pos[2];
    this.yPos = pos[3];

    if (num) {
      this.buttons();
      this.drawDots();
    }
  }

  _createClass(Card, [{
    key: 'clearCanvas',
    value: function clearCanvas() {
      this.canvas.width = 0;
      this.canvas.width = 255;
    }
  }, {
    key: 'randomPosition',
    value: function randomPosition() {
      for (var i = Math.floor(Math.random() * 10); i < 15; i++) {
        this.gPos = [255 - this.gPos[1], this.gPos[0]];
        this.pPos = [255 - this.pPos[1], this.pPos[0]];
        this.rPos = [255 - this.rPos[1], this.rPos[0]];
        this.yPos = [255 - this.yPos[1], this.yPos[0]];
      }
      for (var _i = Math.floor(Math.random() * 10); _i < 15; _i++) {
        this.gPos = [this.gPos[1], 255 - this.gPos[0]];
        this.pPos = [this.pPos[1], 255 - this.pPos[0]];
        this.rPos = [this.rPos[1], 255 - this.rPos[0]];
        this.yPos = [this.yPos[1], 255 - this.yPos[0]];
      }
      for (var _i2 = Math.floor(Math.random() * 10); _i2 < 15; _i2++) {
        this.gPos = [this.gPos[0], 255 - this.gPos[1]];
        this.rPos = [this.rPos[0], 255 - this.rPos[1]];
        this.yPos = [this.yPos[0], 255 - this.yPos[1]];
        this.pPos = [this.pPos[0], 255 - this.pPos[1]];
      }
    }
  }, {
    key: 'buttons',
    value: function buttons() {
      var _this = this;

      var counter = document.getElementById('rotate-counter' + this.num);
      counter.onclick = function () {
        if (_this.canvas.classList.contains('full')) {
          _this.rotateCounter();
        }
      };
      var label = document.querySelector('.rot-counter');
      counter.onmouseover = function () {
        label.classList.remove('hidden');
        counter.classList.add('hover');
      };
      counter.onmouseout = function () {
        label.classList.add('hidden');
        counter.classList.remove('hover');
      };

      var clock = document.getElementById('rotate-clock' + this.num);
      clock.onclick = function () {
        if (_this.canvas.classList.contains('full')) {
          _this.rotateClock();
        }
      };
      var label1 = document.querySelector('.rot-clock');
      clock.onmouseover = function () {
        label1.classList.remove('hidden');
        clock.classList.add('hover');
      };
      clock.onmouseout = function () {
        label1.classList.add('hidden');
        clock.classList.remove('hover');
      };

      var up = document.getElementById('flip-up' + this.num);
      up.onclick = function () {
        if (_this.canvas.classList.contains('full')) {
          _this.flipUp();
        }
      };
      var uplabel = document.querySelector('.up');
      up.onmouseover = function () {
        uplabel.classList.remove('hidden');
        up.classList.add('hover');
      };
      up.onmouseout = function () {
        uplabel.classList.add('hidden');
        up.classList.remove('hover');
      };

      var side = document.getElementById('flip-side' + this.num);
      side.onclick = function () {
        if (_this.canvas.classList.contains('full')) {
          _this.flipSide();
        }
      };
      var sidelabel = document.querySelector('.side');
      side.onmouseover = function () {
        sidelabel.classList.remove('hidden');
        side.classList.add('hover');
      };
      side.onmouseout = function () {
        sidelabel.classList.add('hidden');
        side.classList.remove('hover');
      };
    }
  }, {
    key: 'drawDot',
    value: function drawDot(pos, col) {
      this.ctx.beginPath();
      this.ctx.arc(pos[0], pos[1], 13, 0, 100);
      this.ctx.fillStyle = col;
      this.ctx.fill();
      this.ctx.closePath();
    }
  }, {
    key: 'drawDots',
    value: function drawDots() {
      this.drawDot(this.pPos, "#a106ff");
      this.drawDot(this.rPos, "#f53737");
      this.drawDot(this.gPos, "#00ff00");
      this.drawDot(this.yPos, "yellow");
    }
  }, {
    key: 'rotateCounter',
    value: function rotateCounter() {
      var _this2 = this;

      this.canvas.classList.add('counter');
      this.gPos = [this.gPos[1], 255 - this.gPos[0]];
      this.pPos = [this.pPos[1], 255 - this.pPos[0]];
      this.rPos = [this.rPos[1], 255 - this.rPos[0]];
      this.yPos = [this.yPos[1], 255 - this.yPos[0]];
      setTimeout(function () {
        _this2.ctx.clearRect(0, 0, 255, 255);
        _this2.canvas.classList.remove('counter');
        _this2.drawDots();
      }, 200);
    }
  }, {
    key: 'rotateClock',
    value: function rotateClock() {
      var _this3 = this;

      this.canvas.classList.add('clock');
      this.gPos = [255 - this.gPos[1], this.gPos[0]];
      this.pPos = [255 - this.pPos[1], this.pPos[0]];
      this.rPos = [255 - this.rPos[1], this.rPos[0]];
      this.yPos = [255 - this.yPos[1], this.yPos[0]];
      setTimeout(function () {
        _this3.ctx.clearRect(0, 0, 255, 255);
        _this3.canvas.classList.remove('clock');
        _this3.drawDots();
      }, 200);
    }
  }, {
    key: 'flipUp',
    value: function flipUp() {
      var _this4 = this;

      this.canvas.classList.add('vert');
      this.gPos = [this.gPos[0], 255 - this.gPos[1]];
      this.rPos = [this.rPos[0], 255 - this.rPos[1]];
      this.yPos = [this.yPos[0], 255 - this.yPos[1]];
      this.pPos = [this.pPos[0], 255 - this.pPos[1]];
      setTimeout(function () {
        _this4.ctx.clearRect(0, 0, 255, 255);
        _this4.canvas.classList.remove('vert');
        _this4.drawDots();
      }, 200);
    }
  }, {
    key: 'flipSide',
    value: function flipSide() {
      var _this5 = this;

      this.canvas.classList.add('horizontal');
      this.gPos = [255 - this.gPos[0], this.gPos[1]];
      this.rPos = [255 - this.rPos[0], this.rPos[1]];
      this.yPos = [255 - this.yPos[0], this.yPos[1]];
      this.pPos = [255 - this.pPos[0], this.pPos[1]];
      setTimeout(function () {
        _this5.ctx.clearRect(0, 0, 255, 255);
        _this5.canvas.classList.remove('horizontal');
        _this5.drawDots();
      }, 200);
    }
  }]);

  return Card;
}();

module.exports = Card;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Card = __webpack_require__(0);
var Target = __webpack_require__(5);
var Stack = __webpack_require__(4);
var Demo = __webpack_require__(2);

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.match = document.getElementById('match');
    this.notMatch = document.getElementById('not-match');
    this.total = document.getElementById('total');
    this.qmark = document.getElementById('qmark');
    this.setUp();
    this.buttons();
    this.count = 0;
  }

  _createClass(Game, [{
    key: 'setUp',
    value: function setUp() {
      this.targetCanvas = document.getElementById('target-canvas');
      this.targetCanvas.width = 255;
      this.targetCanvas.height = 255;
      this.targetCtx = this.targetCanvas.getContext('2d');

      this.stackCanvas = document.getElementById('stack');
      this.stackCanvas.width = 255;
      this.stackCanvas.height = 255;
      this.stackCtx = this.stackCanvas.getContext('2d');

      this.canvas1 = document.getElementById('canvas-1');
      this.canvas1.width = 255;
      this.canvas1.height = 255;
      this.ctx1 = this.canvas1.getContext('2d');
      this.card1 = new Card(this.ctx1, this.canvas1, 1, [[285 * .85, 75 * .85], [75 * .85, 195 * .85], [105 * .85, 75 * .85], [225 * .85, 285 * .85]]);

      this.canvas2 = document.getElementById('canvas-2');
      this.canvas2.width = 255;
      this.canvas2.height = 255;
      this.ctx2 = this.canvas2.getContext('2d');
      this.card2 = new Card(this.ctx2, this.canvas2, 2, [[15 * .85, 225 * .85], [225 * .85, 105 * .85], [105 * .85, 75 * .85], [225 * .85, 285 * .85]]);

      this.canvas3 = document.getElementById('canvas-3');
      this.canvas3.width = 255;
      this.canvas3.height = 255;
      this.ctx3 = this.canvas3.getContext('2d');
      this.card3 = new Card(this.ctx3, this.canvas3, 3, [[75 * .85, 195 * .85], [285 * .85, 75 * .85], [225 * .85, 285 * .85], [105 * .85, 75 * .85]]);

      this.canvas4 = document.getElementById('canvas-4');
      this.canvas4.width = 255;
      this.canvas4.height = 255;
      this.ctx4 = this.canvas4.getContext('2d');
      this.card4 = new Card(this.ctx4, this.canvas4, 4, [[225 * .85, 105 * .85], [15 * .85, 225 * .85], [225 * .85, 285 * .85], [105 * .85, 75 * .85]]);

      this.createTarget();
      this.createStack();
    }
  }, {
    key: 'createTarget',
    value: function createTarget() {
      this.target = new Target(this.targetCtx, this.targetCanvas);
    }
  }, {
    key: 'createStack',
    value: function createStack() {
      this.stack = new Stack(this.stackCtx, this.stackCanvas);
    }
  }, {
    key: 'buttons',
    value: function buttons() {
      var _this = this;

      [this.card1, this.card2, this.card3, this.card4].forEach(function (card, idx) {
        var add = document.getElementById('add' + (idx + 1));
        add.onclick = function () {
          _this.stack.addCard(card);
          card.clearCanvas();
        };
        var label = document.querySelector('.add');
        add.onmouseover = function () {
          label.classList.remove('hidden');
          add.classList.add('hover');
        };
        add.onmouseout = function () {
          label.classList.add('hidden');
          add.classList.remove('hover');
        };
      });

      var remove = document.getElementById('remove-top');

      remove.onclick = function () {
        var card = _this.stack.removeCard();
        card.drawDots();
      };

      var go = document.getElementById('gen-stack');
      go.onclick = function () {
        var cards = _this.stack.cards;
        _this.stack.clearCanvas();
        _this.stack = new Stack(_this.stackCtx, _this.stackCanvas, cards);
        _this.compare();
      };
      go.onmouseover = function () {
        go.classList.add('hover');
      };
      go.onmouseout = function () {
        go.classList.remove('hover');
      };
      var clear = document.getElementById('clear-stack');

      clear.onclick = function () {
        return _this.clearStack();
      };

      var skip = document.getElementById('skip');
      skip.onclick = function () {
        var welcome = document.getElementById('welcome');
        welcome.classList.add('hidden');
        var replay = document.getElementById('replay');
        replay.classList.remove('hidden');
        _this.target.drawNext();
      };

      var play = document.getElementById('play');
      play.onclick = function () {
        _this.setUp();
        _this.buttons();
        _this.demo = new Demo(_this.target);
      };
      var replay = document.getElementById('replay');
      replay.onclick = function () {
        _this.setUp();
        _this.buttons();
        _this.demo = new Demo(_this.target);
      };
    }
  }, {
    key: 'clearStack',
    value: function clearStack() {
      this.stack.clearCanvas();
      this.stack.cards = [];
      this.stack.canvas.classList.remove('full');
      this.stack.canvas.classList.add('empty');
      this.qmark.classList.remove('hidden');

      this.card1.clearCanvas();
      this.card2.clearCanvas();
      this.card3.clearCanvas();
      this.card4.clearCanvas();
      this.card1.drawDots();
      this.card2.drawDots();
      this.card3.drawDots();
      this.card4.drawDots();
      this.toggleCards();
    }
  }, {
    key: 'toggleCards',
    value: function toggleCards() {
      [this.card1, this.card2, this.card3, this.card4].forEach(function (card) {
        if (!card.canvas.classList.contains('full')) {
          card.canvas.classList.add('full');
          card.canvas.classList.remove('empty');
        }
      });
    }
  }, {
    key: 'compare',
    value: function compare() {
      var _this2 = this;

      var same = true;
      var diff = 0;
      for (var i = 0; i < this.target.imgData.length; i++) {
        if (this.target.imgData[i] !== this.stack.imgData[i]) {
          same = false;
          diff++;
        }
      }
      if (diff < 2000) {
        this.count++;
        this.match.classList.remove('hidden');
        this.match.classList.add('appear');
        if (!this.demo.demo) {
          this.total.innerHTML++;
        }

        setTimeout(function () {
          _this2.target.drawNext();
          _this2.clearStack();
          _this2.match.classList.add("hidden");
          _this2.match.classList.remove('appear');
        }, 1500);
      } else {
        this.notMatch.classList.remove('hidden');
        this.notMatch.classList.add('appear');
        setTimeout(function () {
          _this2.notMatch.classList.add("hidden");
          _this2.notMatch.classList.remove('appear');
        }, 1500);
      }
    }
  }]);

  return Game;
}();

module.exports = Game;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Demo = function () {
  function Demo(target) {
    _classCallCheck(this, Demo);

    target.round1();

    this.demo = true;

    var welcome = document.getElementById('welcome');
    welcome.classList.add('hidden');

    var replay = document.getElementById('replay');
    replay.classList.add('hidden');
    var play = document.getElementById('play');
    play.classList.add('hidden');

    this.text();
  }

  _createClass(Demo, [{
    key: 'stop',
    value: function stop() {
      this.demo = false;
      this.finalize();
      return true;
    }
  }, {
    key: 'text',
    value: function text() {
      var _this = this;

      setTimeout(function () {
        return _this.flashText('one');
      }, 1000);
      setTimeout(function () {
        return _this.flashText('two');
      }, 3000);
      setTimeout(function () {
        return _this.flashText('three');
      }, 5000);
      setTimeout(function () {
        return _this.cards();
      }, 7000);
    }
  }, {
    key: 'flashText',
    value: function flashText(id) {
      var one = document.getElementById(id);
      if (this.demo) {
        one.classList.remove('hidden');
        one.classList.add('appear');
      }
      setTimeout(function () {
        one.classList.remove('appear');
        one.classList.add('hidden');
      }, 1000);
    }
  }, {
    key: 'addCards',
    value: function addCards(id) {
      if (this.demo) {
        var flip1 = document.getElementById(id);
        flip1.onmouseover();
        setTimeout(function () {
          return flip1.click();
        }, 1000);
        setTimeout(function () {
          return flip1.onmouseout();
        }, 1500);
      }
    }
  }, {
    key: 'cards',
    value: function cards() {
      var _this2 = this;

      this.addCards('flip-up1');
      setTimeout(function () {
        return _this2.addCards('add1');
      }, 2000);
      setTimeout(function () {
        return _this2.addCards('rotate-clock2');
      }, 3500);
      setTimeout(function () {
        return _this2.addCards('rotate-clock2');
      }, 5500);
      setTimeout(function () {
        return _this2.addCards('add2');
      }, 7000);
      setTimeout(function () {
        return _this2.addCards('flip-side3');
      }, 8500);
      setTimeout(function () {
        return _this2.addCards('add3');
      }, 10000);
      setTimeout(function () {
        return _this2.addCards('add4');
      }, 11500);

      setTimeout(function () {
        return _this2.submit();
      }, 13000);
    }
  }, {
    key: 'submit',
    value: function submit() {
      if (this.demo) {
        var check = document.getElementById('gen-stack');
        check.onmouseover();
        setTimeout(function () {
          return check.click();
        }, 500);
        setTimeout(function () {
          return check.onmouseout();
        }, 1000);
        setTimeout(function () {
          var yourTurn = document.getElementById('your-turn');
          yourTurn.classList.remove('hidden');
          yourTurn.classList.add('appear');
        }, 2200);
      }

      this.finalize();
    }
  }, {
    key: 'finalize',
    value: function finalize() {
      var _this3 = this;

      setTimeout(function () {
        return _this3.demo = false;
      }, 1000);
      var skip = document.getElementById('skip');
      skip.classList.add('hidden');

      var play = document.getElementById('play');
      play.classList.remove('hidden');

      var replay = document.getElementById('replay');
      replay.innerHTML = 'Replay Demo';
      replay.classList.remove('hidden');
    }
  }]);

  return Demo;
}();

module.exports = Demo;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Game = __webpack_require__(1);

document.addEventListener("DOMContentLoaded", function () {
  var game = new Game();
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = __webpack_require__(0);

var Stack = function (_Card) {
  _inherits(Stack, _Card);

  function Stack(ctx, canvas) {
    var cards = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    _classCallCheck(this, Stack);

    var _this = _possibleConstructorReturn(this, (Stack.__proto__ || Object.getPrototypeOf(Stack)).call(this));

    _this.ctx = ctx;
    _this.canvas = canvas;
    _this.cards = cards;
    _this.qmark = document.getElementById('qmark');
    _this.drawCards();

    _this.imgData = _this.ctx.getImageData(0, 0, 300, 300).data;
    return _this;
  }

  _createClass(Stack, [{
    key: 'buttons',
    value: function buttons() {}
  }, {
    key: 'drawDots',
    value: function drawDots() {}
  }, {
    key: 'addCard',
    value: function addCard(card) {
      this.clearCanvas();
      this.cards.push(card);
      this.drawCards();
      card.canvas.classList.add('empty');
      card.canvas.classList.remove('full');
    }
  }, {
    key: 'removeCard',
    value: function removeCard() {
      this.clearCanvas();
      var card = this.cards.pop();
      this.drawCards();
      card.canvas.classList.add('full');
      card.canvas.classList.remove('empty');
      return card;
    }
  }, {
    key: 'drawCards',
    value: function drawCards() {
      var _this2 = this;

      this.cards.forEach(function (card) {
        if (card) {
          _this2.drawCard(card);
        }
      });
      if (this.cards.length === 0) {
        this.canvas.classList.add('empty');
        this.qmark.classList.remove('hidden');
      } else {
        this.canvas.classList.add('full');
        this.canvas.classList.remove('empty');
        this.qmark.classList.add('hidden');
      }
    }
  }, {
    key: 'drawCard',
    value: function drawCard(card) {
      this.drawDot(card.pPos, "#a106ff");
      this.drawDot(card.rPos, "#f53737");
      this.drawDot(card.gPos, "#00ff00");
      this.drawDot(card.yPos, "yellow");
    }
  }]);

  return Stack;
}(Card);

module.exports = Stack;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = __webpack_require__(0);

var Target = function (_Card) {
  _inherits(Target, _Card);

  function Target(ctx, canvas) {
    _classCallCheck(this, Target);

    var _this = _possibleConstructorReturn(this, (Target.__proto__ || Object.getPrototypeOf(Target)).call(this, ctx, canvas));

    _this.cards = [];

    return _this;
  }

  _createClass(Target, [{
    key: "buttons",
    value: function buttons() {}
  }, {
    key: "drawDots",
    value: function drawDots() {
      this.round1();
    }
  }, {
    key: "drawNext",
    value: function drawNext() {
      this.clearCanvas();
      this.generateCards();
      this.imgData = this.ctx.getImageData(0, 0, 300, 300).data;
    }
  }, {
    key: "generateCards",
    value: function generateCards() {
      var locations = [[[242.25, 63.75], [63.75, 165.75], [89.25, 63.75], [191.25, 242.25]], [[12.75, 191.25], [191.25, 89.25], [89.25, 63.75], [191.25, 242.25]], [[63.75, 165.75], [242.25, 63.75], [191.25, 242.25], [89.25, 63.75]], [[191.25, 89.25], [12.75, 191.25], [191.25, 242.25], [89.25, 63.75]]];
      var a = Math.floor(Math.random() * 4);
      var A = locations[a];
      locations.splice(a, 1);
      var b = Math.floor(Math.random() * 3);
      var B = locations[b];
      locations.splice(b, 1);
      var c = Math.floor(Math.random() * 2);
      var C = locations[c];
      locations.splice(c, 1);
      var D = locations[0];

      this.cardA = new Card(this.ctx, this.canvas, null, A);

      this.cardB = new Card(this.ctx, this.canvas, null, B);

      this.cardC = new Card(this.ctx, this.canvas, null, C);

      this.cardD = new Card(this.ctx, this.canvas, null, D);

      this.cardA.randomPosition();
      this.cardB.randomPosition();
      this.cardC.randomPosition();
      this.cardD.randomPosition();

      this.cards = [this.cardA, this.cardB, this.cardC, this.cardD];

      this.drawCards();
    }
  }, {
    key: "drawCards",
    value: function drawCards() {
      this.cards.forEach(function (card) {
        if (card) {
          card.drawDots();
        }
      });
    }
  }, {
    key: "round1",
    value: function round1() {
      this.drawDot([89.25, 63.75], "yellow");
      this.drawDot([63.75, 12.75], "yellow");
      this.drawDot([165.75, 63.75], "yellow");
      this.drawDot([191.25, 12.75], "yellow");
      this.drawDot([191.25, 165.75], "#00ff00");
      this.drawDot([242.25, 191.25], "#00ff00");
      this.drawDot([191.25, 89.25], "#00ff00");
      this.drawDot([242.25, 63.75], "#00ff00");
      this.drawDot([191.25, 242.25], "#f53737");
      this.drawDot([165.75, 191.25], "#f53737");
      this.drawDot([89.25, 191.25], "#f53737");
      this.drawDot([63.75, 242.25], "#f53737");
      this.drawDot([12.75, 191.25], "#a106ff");
      this.drawDot([63.75, 165.75], "#a106ff");
      this.drawDot([63.75, 89.25], "#a106ff");
      this.drawDot([12.75, 63.75], "#a106ff");
      this.imgData = this.ctx.getImageData(0, 0, 300, 300).data;
    }
  }]);

  return Target;
}(Card);

module.exports = Target;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map