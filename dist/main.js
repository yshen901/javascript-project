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

/***/ "./src/buildings/building.js":
/*!***********************************!*\
  !*** ./src/buildings/building.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource */ \"./src/buildings/resource.js\");\n\n\nclass Building extends _resource__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(pos, symbol) {\n    super(pos, symbol);\n    this.level = 0;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Building);\n\n//# sourceURL=webpack:///./src/buildings/building.js?");

/***/ }),

/***/ "./src/buildings/hq.js":
/*!*****************************!*\
  !*** ./src/buildings/hq.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./building */ \"./src/buildings/building.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings */ \"./src/settings.js\");\n\n\n\nclass HQ extends _building__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(pos, symbol) {\n    super(pos, symbol);\n    this.range = _settings__WEBPACK_IMPORTED_MODULE_1__[\"mapSize\"].SQUARE_SIZE * (1 + this.level);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HQ);\n\n//# sourceURL=webpack:///./src/buildings/hq.js?");

/***/ }),

/***/ "./src/buildings/resource.js":
/*!***********************************!*\
  !*** ./src/buildings/resource.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass StaticObject {\n  constructor(pos, symbol) {\n    this.pos = pos;\n    this.symbol = symbol;\n    this.deletable = false;\n  }\n\n  getSymbol() { return this.symbol; }\n\n  getPos() { return this.pos; }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StaticObject);\n\n//# sourceURL=webpack:///./src/buildings/resource.js?");

/***/ }),

/***/ "./src/buildings/resource_collector.js":
/*!*********************************************!*\
  !*** ./src/buildings/resource_collector.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./building */ \"./src/buildings/building.js\");\n\n\nclass ResourceCollector extends _building__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(pos, homePos, symbol) {\n    super(pos, symbol);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResourceCollector);\n\n//# sourceURL=webpack:///./src/buildings/resource_collector.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/game_view */ \"./src/ui/game_view.js\");\n\n\nclass Game {\n  constructor(ctx, canvasEl) {\n    this.gameView = new _ui_game_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, canvasEl);\n    \n    this.map = this.gameView.getMap();\n    this.gems = 0;\n  }\n\n  handleClick(e) {\n    let offset = 10;\n    let pos = [e.y - offset, e.x - offset];\n    this.gameView.handleClick(pos);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvasEl = document.getElementsByTagName(\"canvas\")[0];\n  const ctx = canvasEl.getContext(\"2d\");\n  \n  const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, canvasEl);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/*! exports provided: mapSize, resources, buildings, buildingParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapSize\", function() { return mapSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resources\", function() { return resources; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildings\", function() { return buildings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildingParams\", function() { return buildingParams; });\nconst mapSize = {\n  X: 60,\n  Y: 60,\n  WIDTH: 1200,\n  HEIGHT: 640,\n  SQUARE_SIZE: 50\n};\n\nconst resources = {\n  A: {\n    SYMBOL: \"A\",\n    AMOUNT: 5,\n  },\n  B: {\n    SYMBOL: \"B\",\n    AMOUNT: 5,\n  }\n}\n\nconst buildings = {\n  HQ: {\n    SYMBOL: \"HQ\",\n  },\n  AC: {\n    SYMBOL: \"AC\",\n    REQUIRE: \"HQ\",\n    ADJACENT: \"A\",\n  },\n  BC: {\n    SYMBOL: \"BC\",\n    REQUIRE: \"HQ\",\n    ADJACENT: \"B\",\n  },\n}\n\nconst buildingParams = {\n  Y: mapSize.Y + mapSize.HEIGHT + 10,\n  X: mapSize.X + 20,\n  BUTTON_SIZE: 40,\n  SYMBOLS: [\"HQ\", \"AC\", \"BC\"],\n};\n\n//# sourceURL=webpack:///./src/settings.js?");

/***/ }),

/***/ "./src/ui/buildings_list.js":
/*!**********************************!*\
  !*** ./src/ui/buildings_list.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass BuildingsList {\n  constructor(ctx, buildingParams) {\n    this.ctx = ctx;\n    this.buildingParams = buildingParams;\n\n    this.drawBuildingsList();\n  }\n\n  // Draws the buttons\n  drawBuildingsList() {\n    let { ctx } = this;\n    let { Y, X, BUTTON_SIZE, SYMBOLS } = this.buildingParams;\n\n    for (let i = 0; i < SYMBOLS.length; i++) {\n      ctx.fillStyle = i % 2 === 0 ? \"black\" : \"gray\";\n      ctx.fillRect(X + i*BUTTON_SIZE, Y, BUTTON_SIZE, BUTTON_SIZE);\n    }\n\n    ctx.font = \"15px Arial\";\n    ctx.textAlign = \"center\";\n    ctx.fillStyle = \"white\";\n    for (let i = 0; i < SYMBOLS.length; i++) {\n      ctx.fillText(SYMBOLS[i], X + i*BUTTON_SIZE + BUTTON_SIZE*0.5, Y + BUTTON_SIZE*0.6);\n    }\n  }\n\n  // Takes in \n  handleClick(pos) {\n    let { Y, X, BUTTON_SIZE, SYMBOLS } = this.buildingParams;\n    let [y, x] = pos;\n\n    let symbolIdx = Math.floor((x - X) / BUTTON_SIZE);\n    if (SYMBOLS[symbolIdx]) return SYMBOLS[symbolIdx]\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BuildingsList);\n\n//# sourceURL=webpack:///./src/ui/buildings_list.js?");

/***/ }),

/***/ "./src/ui/game_view.js":
/*!*****************************!*\
  !*** ./src/ui/game_view.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ \"./src/ui/map.js\");\n/* harmony import */ var _buildings_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildings_list */ \"./src/ui/buildings_list.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings */ \"./src/settings.js\");\n\n\n\n\n\nclass GameView {\n  constructor(ctx, canvasEl) {\n    this.ctx = ctx;\n    this.canvasEl = canvasEl;\n\n    this.mapSize = _settings__WEBPACK_IMPORTED_MODULE_2__[\"mapSize\"];\n    this.resources = _settings__WEBPACK_IMPORTED_MODULE_2__[\"resources\"];\n    this.buildings = _settings__WEBPACK_IMPORTED_MODULE_2__[\"buildings\"];\n    this.buildingParams = _settings__WEBPACK_IMPORTED_MODULE_2__[\"buildingParams\"];\n\n    this.building = null;\n\n    this.setupCanvas();\n    this.map = new _map__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, this.mapSize, this.resources, this.buildings);\n    this.buildingsList = new _buildings_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, this.buildingParams);\n  }\n\n  setupCanvas() {\n    let { canvasEl, ctx } = this;\n    let { HEIGHT, WIDTH, Y, X } = this.mapSize;\n    canvasEl.width = WIDTH + 2*X;\n    canvasEl.height = HEIGHT + 2*Y;\n    ctx.fillStyle = \"lightgray\";\n    ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);\n\n    canvasEl.addEventListener(\"click\", (e) => this.handleClick(e));\n  }\n\n  handleClick(e) {\n    let offset = 10;\n    let pos = [e.y - offset, e.x - offset];\n    if (this.insideMap(pos)) {\n      console.log(pos, this.building);\n      this.map.handleClick(pos, this.building);\n      this.building = null;\n    } else if (this.insideBuildingsList(pos)) {\n      this.building = this.buildingsList.handleClick(pos);\n      console.log(this.building);\n    } else\n      this.building = null;\n  }\n\n  insideMap(pos) {\n    let [y, x] = pos;\n    let { mapSize } = this;\n\n    if (x < mapSize.X || x > mapSize.X + mapSize.WIDTH) return false;\n    if (y < mapSize.Y || y > mapSize.Y + mapSize.HEIGHT) return false;\n    return true;\n  }\n\n  insideBuildingsList(pos) {\n    let [y, x] = pos;\n    let { Y, X, BUTTON_SIZE, SYMBOLS } = this.buildingParams;\n\n    if (x < X || x > X + BUTTON_SIZE*SYMBOLS.length) return false;\n    if (y < Y || y > Y + BUTTON_SIZE) return false;\n    return true;\n  }\n\n\n  // GETTERS\n  getMap() { return this.map; }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n//# sourceURL=webpack:///./src/ui/game_view.js?");

/***/ }),

/***/ "./src/ui/map.js":
/*!***********************!*\
  !*** ./src/ui/map.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _buildings_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../buildings/resource */ \"./src/buildings/resource.js\");\n/* harmony import */ var _buildings_resource_collector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../buildings/resource_collector */ \"./src/buildings/resource_collector.js\");\n/* harmony import */ var _buildings_hq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/hq */ \"./src/buildings/hq.js\");\n\n\n\n\nclass Map {\n  constructor(ctx, map, resources, buildings) {\n    this.ctx = ctx;\n    this.map = map;\n    this.resources = resources;\n    this.buildings = buildings;\n\n    this.exists = {};\n\n    this.grid = new Array(Math.floor(this.map.HEIGHT / this.map.SQUARE_SIZE));\n    for (let y = 0; y < Math.floor(this.map.HEIGHT / this.map.SQUARE_SIZE); y++)\n      this.grid[y] = new Array(Math.floor(this.map.WIDTH / this.map.SQUARE_SIZE));\n\n    this.drawGrid();\n    this.placeResources();\n    this.drawElements();\n  }\n\n  drawGrid() {\n    let { ctx } = this;\n    let { X, Y, WIDTH, HEIGHT, SQUARE_SIZE } = this.map;\n\n    ctx.fillStyle = \"black\";\n    ctx.fillRect(X, Y, WIDTH, HEIGHT);\n\n    ctx.strokeStyle = \"gray\";\n    ctx.lineWidth = 1;\n    for (let x = SQUARE_SIZE; x < WIDTH; x += SQUARE_SIZE) {\n      ctx.moveTo(x + X, Y);\n      ctx.lineTo(x + X, HEIGHT + Y);\n      ctx.stroke();\n    }\n\n    for (let y = SQUARE_SIZE; y < HEIGHT; y += SQUARE_SIZE) {\n      ctx.moveTo(X, y + Y);\n      ctx.lineTo(WIDTH + X, y + Y);\n      ctx.stroke();\n    }\n  }\n\n  placeResources() {\n    let { HEIGHT, WIDTH, SQUARE_SIZE } = this.map;\n    let symbols = Object.keys(this.resources);\n\n    for (let i = 0; i < symbols.length; i++) {\n      let counter = 0;\n      let x, y;\n      while (counter < this.resources[symbols[i]].AMOUNT) {\n        y = Math.floor(Math.random() * Math.floor(HEIGHT / SQUARE_SIZE));\n        x = Math.floor(Math.random() * Math.floor(WIDTH / SQUARE_SIZE));\n        if (this.grid[y][x]) continue;\n        this.grid[y][x] = new _buildings_resource__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([y, x], symbols[i]);\n        counter++;\n      }\n    }\n  }\n\n  drawElements() {\n    let { ctx, grid } = this;\n    let { X, Y, HEIGHT, WIDTH, SQUARE_SIZE } = this.map;\n\n    ctx.font = `${SQUARE_SIZE/2}px Arial`;\n    ctx.textAlign = \"center\";\n    ctx.fillStyle = \"white\";\n    for (let y = 0; y < Math.floor(HEIGHT / SQUARE_SIZE); y++) {\n      for (let x = 0; x < Math.floor(WIDTH / SQUARE_SIZE); x++) {\n        if (grid[y][x])\n          ctx.fillText(grid[y][x].getSymbol(), x*SQUARE_SIZE + SQUARE_SIZE*0.5 + X, y*SQUARE_SIZE + SQUARE_SIZE*0.7 + Y);\n      }\n    }\n  }\n\n  handleClick(pos, buildingSymbol) {\n    let { X, Y, SQUARE_SIZE } = this.map;\n\n    let gridPos = [\n      Math.floor((pos[0] - Y) / SQUARE_SIZE), \n      Math.floor((pos[1] - X) / SQUARE_SIZE)\n    ];\n\n    if (!this.getPos(gridPos)) {\n      if (buildingSymbol && this.canPlace(gridPos, buildingSymbol)) {\n        this.build(gridPos, buildingSymbol);\n        this.drawElements(); // TODO: Make this more specialized by just redrawing one square\n      }\n    }\n  }\n\n  canPlace(pos, symbol) {\n    let { buildings, exists } = this;\n    switch(symbol) {\n      case \"HQ\": return true;\n      case \"AC\":\n      case \"BC\":\n        if (!exists[buildings[symbol].REQUIRE]) return false;\n        if (!this.hasAdjacent(pos, buildings[symbol].ADJACENT)) return false;\n        console.log(\"adjacent\");\n        return true;\n      default:\n        console.log(symbol);\n        return false;\n    }\n  }\n\n  hasAdjacent(pos, symbol) {\n    let { grid } = this;\n    let [y, x] = pos;\n    if (grid[y + 1] && grid[y + 1][x] && grid[y + 1][x].getSymbol() === symbol) return true;\n    if (grid[y - 1] && grid[y - 1][x] && grid[y-1][x].getSymbol() === symbol) return true;\n    if (grid[y][x + 1] && grid[y][x + 1].getSymbol() === symbol) return true;\n    if (grid[y][x - 1] && grid[y][x - 1].getSymbol() === symbol) return true;\n  }\n\n  getPos(pos) {\n    let [y, x] = pos;\n    if (this.grid[y])\n      return this.grid[y][x];\n  }\n\n  build(pos, buildingSymbol) {\n    let [y, x] = pos;\n    let building;\n    switch (buildingSymbol) {\n      case \"HQ\": \n        building = new _buildings_hq__WEBPACK_IMPORTED_MODULE_2__[\"default\"](pos, buildingSymbol); break;\n      case \"AC\":\n      case \"BC\":\n        building = new _buildings_resource_collector__WEBPACK_IMPORTED_MODULE_1__[\"default\"](pos, buildingSymbol); break; \n    }\n\n    if (!this.grid[y][x]) {\n      this.grid[y][x] = building;\n      this.exists[building.getSymbol()] = true;\n    }\n\n    debugger;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\n\n//# sourceURL=webpack:///./src/ui/map.js?");

/***/ })

/******/ });