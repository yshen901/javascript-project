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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ "./src/map.js");


document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  const ctx = canvasEl.getContext("2d");
  
  const map = new _map__WEBPACK_IMPORTED_MODULE_0__["default"](ctx, canvasEl);
});


/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/*! exports provided: MAP_WIDTH, MAP_HEIGHT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP_WIDTH", function() { return MAP_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP_HEIGHT", function() { return MAP_HEIGHT; });
const MAP_WIDTH = 12;
const MAP_HEIGHT = 8;

const RESOURCE_AMOUNT_A = 10;
const RESOURCE_AMOUNT_B = 10;

const RESOURCE_A = "A";
const RESOURCE_B = "B";

class Map {
  constructor (ctx, canvasEl) {
    this.ctx = ctx;
    this.canvasEl = canvasEl;

    this.grid = new Array(MAP_WIDTH);
    for (let i = 0; i < this.grid.length; i++)
      this.grid[i] = new Array(MAP_HEIGHT);

    this.drawGrid();
    this.placeResources();
    this.drawResources();
  }

  drawGrid() {
    let { canvasEl, ctx } = this;

    canvasEl.width = MAP_WIDTH * 100;
    canvasEl.height = MAP_HEIGHT * 100;

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, MAP_WIDTH*100, MAP_HEIGHT*100);

    ctx.strokeStyle = "gray";
    ctx.lineWidth= 1;
    for (let i = 100; i < MAP_WIDTH*100; i += 100) {
      ctx.moveTo(i, 0);
      ctx.lineTo(i, MAP_HEIGHT*100);
      ctx.stroke();
    }

    for (let i = 100; i < MAP_HEIGHT*100; i += 100) {
      ctx.moveTo(0, i);
      ctx.lineTo(MAP_WIDTH*100, i);
      ctx.stroke();
    }
  }

  placeResources() {
    let counter = 0;
    let x, y;

    while (counter < RESOURCE_AMOUNT_A) {
      x = Math.floor(Math.random() * MAP_WIDTH);
      y = Math.floor(Math.random() * MAP_HEIGHT);
      if (this.grid[x][y]) continue;
      this.grid[x][y] = RESOURCE_A;
      counter++;
    }

    counter = 0;
    while (counter < RESOURCE_AMOUNT_B) {
      x = Math.floor(Math.random() * MAP_WIDTH);
      y = Math.floor(Math.random() * MAP_HEIGHT);
      if (this.grid[x][y]) continue;
      this.grid[x][y] = RESOURCE_B;
      counter++;
    }
  }

  drawResources() {
    let { ctx, grid } = this;
    ctx.font = "50px Arial";
    for (let i = 0; i < MAP_WIDTH; i++) {
      for (let j = 0; j < MAP_HEIGHT; j++) {
        if (grid[i][j])
          ctx.strokeText(grid[i][j], i*100 + 25, j*100 + 25);
      }
    }
  }

  grid(x, y) {
    return this.grid[x][y];
  }

  setGrid(x, y, val) {
    this.grid[x][y] = val;
  }
}



/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map