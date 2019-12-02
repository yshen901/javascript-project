export const mapSize = {
  X: 60,
  Y: 60,
  WIDTH: 1200,
  HEIGHT: 600,
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
  },
  AC: {
    SYMBOL: "AC",
    REQUIRE: "HQ",
    ADJACENT: "A",
  },
  BC: {
    SYMBOL: "BC",
    REQUIRE: "HQ",
    ADJACENT: "B",
  },
  O: {
    SYMBOL: "O",
    REQUIRE: "HQ",
  }
}

export const buildingParams = {
  Y: mapSize.Y + mapSize.HEIGHT + 10,
  X: mapSize.X + 20,
  BUTTON_SIZE: 40,
  SYMBOLS: ["HQ", "AC", "BC", "O"],
};