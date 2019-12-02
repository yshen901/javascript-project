import Building from './building';

class HQ extends Building {
  constructor(pos, symbol, grid) {
    super(pos, symbol);
    this.networkRange = 3;
  }

  connectable() {
    return true;
  }
}

export default HQ;