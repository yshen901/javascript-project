class StaticObject {
  constructor(pos, symbol, graph) {
    this.pos = pos;
    this.symbol = symbol;
    this.graph = graph; 

    this.deletable = false;
    this.networkRange = 0;
  }

  getSymbol() { return this.symbol; }

  getPos() { return this.pos; }

  connectable() {
    return false;
  }
  
}

export default StaticObject;