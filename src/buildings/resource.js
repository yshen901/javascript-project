class StaticObject {
  constructor(pos, symbol) {
    this.pos = pos;
    this.symbol = symbol;
    this.deletable = false;
  }

  getSymbol() { return this.symbol; }

  getPos() { return this.pos; }
}

export default StaticObject;