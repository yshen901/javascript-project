import Resource from '../buildings/static_object';
import ResourceCollector from "../buildings/resource_collector";
import HQ from "../buildings/hq";
import Connector from '../buildings/connector';
import Graph from '../data_structures/graph';

class Map {
  constructor(ctx, map, resources, buildings) {
    this.ctx = ctx;
    this.map = map;
    this.resources = resources;
    this.buildings = buildings;

    this.exists = {};

    this.grid = new Array(Math.floor(this.map.HEIGHT / this.map.SQUARE_SIZE));
    for (let y = 0; y < Math.floor(this.map.HEIGHT / this.map.SQUARE_SIZE); y++)
      this.grid[y] = new Array(Math.floor(this.map.WIDTH / this.map.SQUARE_SIZE));

    this.graph = new Graph(0, this.grid);

    this.placeResources();
    this.drawAll();
  }

  placeResources() {
    let { HEIGHT, WIDTH, SQUARE_SIZE } = this.map;
    let symbols = Object.keys(this.resources);

    for (let i = 0; i < symbols.length; i++) {
      let counter = 0;
      let x, y;
      while (counter < this.resources[symbols[i]].AMOUNT) {
        y = Math.floor(Math.random() * Math.floor(HEIGHT / SQUARE_SIZE));
        x = Math.floor(Math.random() * Math.floor(WIDTH / SQUARE_SIZE));
        if (this.grid[y][x]) continue;
        this.grid[y][x] = new Resource([y, x], symbols[i]);
        counter++;
      }
    }
  }

  drawAll() {
    this.drawGrid();
    this.drawNetwork();
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

  drawNetwork() {
    let { ctx, graph } = this;

    let { X, Y, SQUARE_SIZE } = this.map;
    let nodes = graph.AdjList.keys();
    
    ctx.strokeStyle = "gray";
    ctx.lineWidth = 1;
    for (let node of nodes) {
      let otherNodes = graph.AdjList.get(node);
      let [ y1, x1 ] = node.getPos();
      for (let otherNode of otherNodes) {
        let [ y2, x2 ] = otherNode.getPos();
        // debugger;
        ctx.moveTo(x1*SQUARE_SIZE + SQUARE_SIZE/2 + X, y1*SQUARE_SIZE + SQUARE_SIZE/2 + Y);
        ctx.lineTo(x2*SQUARE_SIZE + SQUARE_SIZE/2 + X, y2*SQUARE_SIZE + SQUARE_SIZE/2 + Y);
        ctx.stroke();
      }
    }
  }

  drawElements() {
    let { ctx, grid } = this;
    let { X, Y, HEIGHT, WIDTH, SQUARE_SIZE } = this.map;

    ctx.font = `${SQUARE_SIZE/4}px Arial`;
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    for (let y = 0; y < Math.floor(HEIGHT / SQUARE_SIZE); y++) {
      for (let x = 0; x < Math.floor(WIDTH / SQUARE_SIZE); x++) {
        if (grid[y][x])
          ctx.fillText(grid[y][x].getSymbol(), x*SQUARE_SIZE + SQUARE_SIZE*0.5 + X, y*SQUARE_SIZE + SQUARE_SIZE*0.6 + Y);
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
      if (buildingSymbol && this.canPlace(gridPos, buildingSymbol)) {
        this.build(gridPos, buildingSymbol);
        this.drawAll(); // TODO: Make this more specialized by just redrawing one square
      }
    }
  }

  canPlace(pos, symbol) {
    let { buildings, exists } = this;
    switch(symbol) {
      case "HQ": return true;
      case "AC":
      case "BC":
        if (!exists[buildings[symbol].REQUIRE]) return false;
        if (!this.hasAdjacent(pos, buildings[symbol].ADJACENT)) return false;
        return true;
      case "O":
        if (!exists[buildings[symbol].REQUIRE]) return false;
        return true;
      default:
        return false;
    }
  }

  hasAdjacent(pos, symbol) {
    let { grid } = this;
    let [y, x] = pos;
    if (grid[y + 1] && grid[y + 1][x] && grid[y + 1][x].getSymbol() === symbol) return true;
    if (grid[y - 1] && grid[y - 1][x] && grid[y-1][x].getSymbol() === symbol) return true;
    if (grid[y][x + 1] && grid[y][x + 1].getSymbol() === symbol) return true;
    if (grid[y][x - 1] && grid[y][x - 1].getSymbol() === symbol) return true;
  }

  getPos(pos) {
    let [y, x] = pos;
    if (this.grid[y])
      return this.grid[y][x];
  }

  build(pos, buildingSymbol) {
    let [y, x] = pos;
    if (this.grid[y][x]) return;

    let building;
    switch (buildingSymbol) {
      case "HQ": 
        if (this.exists["HQ"]) return;
        building = new HQ(pos, buildingSymbol); break;
      case "AC":
      case "BC":
        building = new ResourceCollector(pos, buildingSymbol); break; 
      case "O":
        building = new Connector(pos, buildingSymbol); break;
    }

    this.grid[y][x] = building;
    this.graph.addNode(building);
    this.graph.printGraph();
    this.exists[building.getSymbol()] = true;
  }
}

export default Map;