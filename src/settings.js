export const mapSize = {
  X: 60,
  Y: 60,
  WIDTH: 1200,
  HEIGHT: 640,
  SQUARE_SIZE: 50
};

export const resources = {
  A: {
    SYMBOL: "A",
    AMOUNT: 5,
  },
  B: {
    SYMBOL: "B",
    AMOUNT: 5,
  }
}

export const buildings = {
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

export const buildingParams = {
  Y: this.mapSize.Y + this.mapSize.HEIGHT + 10,
  X: this.mapSize.X + 20,
  BUTTON_SIZE: 40,
  SYMBOLS: ["HQ", "AC", "BC"],
};