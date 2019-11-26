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

/***/ "./images/Crystal.jpg":
/*!****************************!*\
  !*** ./images/Crystal.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./images/Crystal.jpg?");

/***/ }),

/***/ "./images/magic_tree.jpg":
/*!*******************************!*\
  !*** ./images/magic_tree.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./images/magic_tree.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ \"./src/map.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvasEl = document.getElementsByTagName(\"canvas\")[0];\n  const ctx = canvasEl.getContext(\"2d\");\n  \n  const map = new _map__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, canvasEl);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/*! exports provided: MAP_WIDTH, MAP_HEIGHT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MAP_WIDTH\", function() { return MAP_WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MAP_HEIGHT\", function() { return MAP_HEIGHT; });\n/* harmony import */ var _images_Crystal_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/Crystal.jpg */ \"./images/Crystal.jpg\");\n/* harmony import */ var _images_Crystal_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_Crystal_jpg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_magic_tree_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/magic_tree.jpg */ \"./images/magic_tree.jpg\");\n/* harmony import */ var _images_magic_tree_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_magic_tree_jpg__WEBPACK_IMPORTED_MODULE_1__);\nconst MAP_WIDTH = 12;\nconst MAP_HEIGHT = 8;\n\nconst RESOURCE_AMOUNT_A = 10;\nconst RESOURCE_AMOUNT_B = 10;\n\nconst RESOURCE_A = \"A\";\nconst RESOURCE_B = \"B\";\n\n\n\n\nclass Map {\n  constructor (ctx, canvasEl) {\n    this.ctx = ctx;\n    this.canvasEl = canvasEl;\n\n    this.grid = new Array(MAP_WIDTH);\n    for (let i = 0; i < this.grid.length; i++)\n      this.grid[i] = new Array(MAP_HEIGHT);\n\n    this.drawGrid();\n    this.placeResources();\n    console.log(this.grid);\n  }\n\n  drawGrid() {\n    let { canvasEl, ctx } = this;\n\n    canvasEl.width = MAP_WIDTH * 100;\n    canvasEl.height = MAP_HEIGHT * 100;\n\n    ctx.fillStyle = \"black\";\n    ctx.fillRect(0, 0, MAP_WIDTH*100, MAP_HEIGHT*100);\n\n    ctx.strokeStyle = \"gray\";\n    ctx.lineWidth= 1;\n    for (let i = 100; i < MAP_WIDTH*100; i += 100) {\n      ctx.moveTo(i, 0);\n      ctx.lineTo(i, MAP_HEIGHT*100);\n      ctx.stroke();\n    }\n\n    for (let i = 100; i < MAP_HEIGHT*100; i += 100) {\n      ctx.moveTo(0, i);\n      ctx.lineTo(MAP_WIDTH*100, i);\n      ctx.stroke();\n    }\n  }\n\n  placeResources() {\n    let counter = 0;\n    let x, y;\n\n    while (counter < RESOURCE_AMOUNT_A) {\n      x = Math.floor(Math.random() * MAP_WIDTH);\n      y = Math.floor(Math.random() * MAP_HEIGHT);\n      if (this.grid[x][y]) continue;\n      this.grid[x][y] = RESOURCE_A;\n      counter++;\n    }\n\n    counter = 0;\n    while (counter < RESOURCE_AMOUNT_B) {\n      x = Math.floor(Math.random() * MAP_WIDTH);\n      y = Math.floor(Math.random() * MAP_HEIGHT);\n      if (this.grid[x][y]) continue;\n      this.grid[x][y] = RESOURCE_B;\n      counter++;\n    }\n  }\n\n  drawResources() {\n    \n  }\n\n  grid(x, y) {\n    return this.grid[x][y];\n  }\n\n  setGrid(x, y, val) {\n    this.grid[x][y] = val;\n  }\n}\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\n\n//# sourceURL=webpack:///./src/map.js?");

/***/ })

/******/ });