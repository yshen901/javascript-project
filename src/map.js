import Resource from './resource';
import Building from "./building";

class Map {
  constructor(ctx, map, resources, buildings) {
    this.ctx = ctx;
    this.map = map;
    this.resources = resources;
    this.buildings = buildings;

    this.grid = new Array(Math.floor(this.map.HEIGHT / this.map.SQUARE_SIZE));
    for (let y = 0; y < Math.floor(this.map.HEIGHT / this.map.SQUARE_SIZE); y++)
      this.grid[y] = new Array(Math.floor(this.map.WIDTH / this.map.SQUARE_SIZE));

    this.drawGrid();
    this.placeResources();
    this.drawElements();
  }

  drawGrid() {
    let { ctx } = this;
    let { X, Y, WIDTH, HEIGHT, SQUARE_SIZE } = this.map;

    ctx.fillStyle = "black";
    ctx.fillRect(X, Y, WIDTH, HEIGHT);

    ctx.strokeStyle = "gray";
    ctx.lineWidth = 1;
    for (let x = SQUARE_SIZE; x < WIDTH; x += SQUARE_SIZE) {
      ctx.moveTo(x + X, Y);
      ctx.lineTo(x + X, HEIGHT + Y);
      ctx.stroke();
    }

    for (let y = SQUARE_SIZE; y < HEIGHT; y += SQUARE_SIZE) {
      ctx.moveTo(X, y + Y);
      ctx.lineTo(WIDTH + X, y + Y);
      ctx.stroke();
    }
  }

  placeResources() {
    let { X, Y, HEIGHT, WIDTH, SQUARE_SIZE } = this.map;
    let { A, B } = this.resources;

    let counter = 0;
    let x, y;

    while (counter < A.AMOUNT) {
      y = Math.floor(Math.random() * Math.floor(HEIGHT / SQUARE_SIZE));
      x = Math.floor(Math.random() * Math.floor(WIDTH / SQUARE_SIZE));
      if (this.grid[y][x]) continue;
      this.grid[y][x] = new Resource([y, x], A.SYMBOL);
      counter++;
    }

    counter = 0;
    while (counter < B.AMOUNT) {
      y = Math.floor(Math.random() * Math.floor(HEIGHT / SQUARE_SIZE));
      x = Math.floor(Math.random() * Math.floor(WIDTH / SQUARE_SIZE));
      if (this.grid[y][x]) continue;
      this.grid[y][x] = new Resource([y, x], B.SYMBOL);
      counter++;
    }
  }

  drawElements() {
    let { ctx, grid } = this;
    let { X, Y, HEIGHT, WIDTH, SQUARE_SIZE } = this.map;

    ctx.font = `${SQUARE_SIZE/2}px Arial`;
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    for (let y = 0; y < Math.floor(HEIGHT / SQUARE_SIZE); y++) {
      for (let x = 0; x < Math.floor(WIDTH / SQUARE_SIZE); x++) {
        if (grid[y][x])
          ctx.fillText(grid[y][x].getSymbol(), x*SQUARE_SIZE + SQUARE_SIZE*0.5 + X, y*SQUARE_SIZE + SQUARE_SIZE*0.7 + Y);
      }
    }
  }

  handleClick(pos, buildingSymbol) {
    let { X, Y, SQUARE_SIZE } = this.map;

    let gridPos = [
      Math.floor((pos[0] - Y) / SQUARE_SIZE), 
      Math.floor((pos[1] - X) / SQUARE_SIZE)
    ];

    if (!this.getPos(gridPos)) {
      if (buildingSymbol) {
        let building = new Building(gridPos, buildingSymbol);
        this.dropVal(gridPos, building);
        this.drawElements(); // TODO: Make this more specialized by just redrawing one square
      }
    }
  }

  canPlace() {

  }

  getPos(pos) {
    let [y, x] = pos;
    if (this.grid[y])
      return this.grid[y][x];
  }

  dropVal(pos, val) {
    let [y, x] = pos;
    let droppable = !this.grid[y][x];
    if (droppable) this.grid[y][x] = val;
    return droppable;
  }
}

export default Map;