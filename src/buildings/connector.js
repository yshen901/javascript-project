import Building from './building';

class Connector extends Building {
  constructor(pos, symbol) {
    super(pos, symbol);
    this.networkRange = 3;
  }

  connectable() { return true }
}

export default Connector;