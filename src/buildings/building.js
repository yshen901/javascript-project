import StaticObject from './static_object';

class Building extends StaticObject {
  constructor(pos, symbol) {
    super(pos, symbol);
    this.level = 1;
    this.deletable = true;
  }
}

export default Building;