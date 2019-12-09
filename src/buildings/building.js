import StaticObject from './static_object';

class Building extends StaticObject {
  constructor(pos, symbol, graph) {
    super(pos, symbol, graph);

    this.level = 1;
    this.deletable = true;

    this.path = [];
    this.calculatePath();
  }

  calculatePath() {
    this.path = this.startPath(this, []);
  }

  startPath(currentNode, path) {
    if (currentNode.getSymbol() === "HQ") {
      path.push(currentNode.getPos());
      return path;
    }
    else {
      debugger;
      let adjacentNodes = this.graph.AdjList.get(currentNode);
      if (!adjacentNodes) return [];
      debugger;
      for (let adjacentNode of adjacentNodes) {
         
      }
    }
  }
}

export default Building;