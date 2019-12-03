import Building from './building';

class HQ extends Building {
  constructor(pos, symbol, graph) {
    super(pos, symbol, graph);
    this.networkRange = 3;
  }

  connectable() {
    return true;
  }
}

export default HQ;