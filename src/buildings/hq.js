import Building from './building';
import { mapSize } from '../settings';

class HQ extends Building {
  constructor(pos, symbol) {
    super(pos, symbol);
    this.range = mapSize.SQUARE_SIZE * (1 + this.level);
  }
}

export default HQ;