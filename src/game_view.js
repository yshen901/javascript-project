import Map from './map';
import BuildingsList from './buildings_list';

class GameView {
  constructor(ctx, canvasEl) {
    this.ctx = ctx;
    this.canvasEl = canvasEl;

    this.mapSize = {
      X: 60,
      Y: 60,
      WIDTH: 1200,
      HEIGHT: 640,
      SQUARE_SIZE: 50
    };

    this.buildingParams = {
      Y: this.mapSize.Y + this.mapSize.HEIGHT + 10,
      X: this.mapSize.X + 20,
      BUTTON_SIZE: 40,
      SYMBOLS: ["HQ", "AC", "BC"],
    };

    this.resources = {
      A: {
        SYMBOL: "A",
        AMOUNT: 5,
      },
      B: {
        SYMBOL: "B",
        AMOUNT: 5,
      }
    }

    this.buildings = {
      HQ: {
        SYMBOL: "HQ",
        REQUIRE: null,
      },
      BC: {
        SYMBOL: "BC",
        REQUIRE: {
          HQ: "EXIST",
          B: "ADJACENT",
        }
      },
      AC: {
        SYMBOL: "AC",
        REQUIRE: {
          HQ: "EXIST", 
          A: "ADJACENT",
        }
      }
    }

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
      console.log(pos, this.building);
      this.map.handleClick(pos, this.building);
      this.building = null;
    } else if (this.insideBuildingsList(pos)) {
      this.building = this.buildingsList.handleClick(pos);
      console.log(this.building);
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
}

export default GameView;