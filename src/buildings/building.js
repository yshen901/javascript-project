import StaticObject from './static_object';

class Building extends StaticObject {
  constructor(pos, symbol) {
    super(pos, symbol);
    this.level = 1;
  }
}

export default Building;