import Map from './map';
import BuildingsList from './buildings_list';

import { mapSize, resources, buildings, buildingParams } from '../settings';

class GameView {
  constructor(ctx, canvasEl) {
    this.ctx = ctx;
    this.canvasEl = canvasEl;

    this.mapSize = mapSize;
    this.resources = resources;
    this.buildings = buildings;
    this.buildingParams = buildingParams;

    this.building = null;

    this.setupCanvas();
    this.map = new Map(ctx, this.mapSize, this.resources, this.buildings);
    this.buildingsList = new BuildingsList(ctx, this.buildingParams);
  }

  setupCanvas() {
    let { canvasEl, ctx } = this;
    let { HEIGHT, WIDTH, Y, X } = this.mapSize;
    canvasEl.width = WIDTH + 2*X;
    canvasEl.height = HEIGHT + 2*Y;
    ctx.fillStyle = "lightgray";
    ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);

    canvasEl.addEventListener("click", (e) => this.handleClick(e));
  }

  handleClick(e) {
    let offset = 10;
    let pos = [e.y - offset, e.x - offset];
    if (this.insideMap(pos)) {
      this.map.handleClick(pos, this.building);
      this.building = null;
    } else if (this.insideBuildingsList(pos)) {
      this.building = this.buildingsList.handleClick(pos);
    } else
      this.building = null;
  }

  insideMap(pos) {
    let [y, x] = pos;
    let { mapSize } = this;

    if (x < mapSize.X || x > mapSize.X + mapSize.WIDTH) return false;
    if (y < mapSize.Y || y > mapSize.Y + mapSize.HEIGHT) return false;
    return true;
  }

  insideBuildingsList(pos) {
    let [y, x] = pos;
    let { Y, X, BUTTON_SIZE, SYMBOLS } = this.buildingParams;

    if (x < X || x > X + BUTTON_SIZE*SYMBOLS.length) return false;
    if (y < Y || y > Y + BUTTON_SIZE) return false;
    return true;
  }


  // GETTERS
  getMap() { return this.map; }
}

export default GameView;