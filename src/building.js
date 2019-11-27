import StaticObject from './resource';

class Building extends StaticObject {
  constructor(pos, symbol) {
    super(pos, symbol);
    this.level = 0;
  }
}

export default Building;