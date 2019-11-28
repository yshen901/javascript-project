class BuildingsList {
  constructor(ctx, buildingParams) {
    this.ctx = ctx;
    this.buildingParams = buildingParams;

    this.drawBuildingsList();
  }

  // Draws the buttons
  drawBuildingsList() {
    let { ctx } = this;
    let { Y, X, BUTTON_SIZE, SYMBOLS } = this.buildingParams;

    for (let i = 0; i < SYMBOLS.length; i++) {
      ctx.fillStyle = i % 2 === 0 ? "black" : "gray";
      ctx.fillRect(X + i*BUTTON_SIZE, Y, BUTTON_SIZE, BUTTON_SIZE);
    }

    ctx.font = "15px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    for (let i = 0; i < SYMBOLS.length; i++) {
      ctx.fillText(SYMBOLS[i], X + i*BUTTON_SIZE + BUTTON_SIZE*0.5, Y + BUTTON_SIZE*0.6);
    }
  }

  // Takes in 
  handleClick(pos) {
    let { Y, X, BUTTON_SIZE, SYMBOLS } = this.buildingParams;
    let [y, x] = pos;

    let symbolIdx = Math.floor((x - X) / BUTTON_SIZE);
    if (SYMBOLS[symbolIdx]) return SYMBOLS[symbolIdx]
  }
}

export default BuildingsList;