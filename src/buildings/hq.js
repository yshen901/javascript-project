import Building from './building';
import { mapSize } from '../settings';

class HQ extends Building {
  constructor(pos, symbol, grid) {
    super(pos, symbol);
    this.range = mapSize.SQUARE_SIZE * (1 + this.level);
    this.networkRange = 3;
  }

  connectable() {
    return true;
  }
}

export default HQ;