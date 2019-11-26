export const MAP_WIDTH = 12;
export const MAP_HEIGHT = 8;

const RESOURCE_AMOUNT_A = 10;
const RESOURCE_AMOUNT_B = 10;

const RESOURCE_A = "A";
const RESOURCE_B = "B";

import RESOURCE_A_IMAGE from "../images/Crystal.jpg";
import RESOURCE_B_IMAGE from "../images/magic_tree.jpg";

class Map {
  constructor (ctx, canvasEl) {
    this.ctx = ctx;
    this.canvasEl = canvasEl;

    this.grid = new Array(MAP_WIDTH);
    for (let i = 0; i < this.grid.length; i++)
      this.grid[i] = new Array(MAP_HEIGHT);

    this.drawGrid();
    this.placeResources();
    console.log(this.grid);
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
    
  }

  grid(x, y) {
    return this.grid[x][y];
  }

  setGrid(x, y, val) {
    this.grid[x][y] = val;
  }
}



export default Map;