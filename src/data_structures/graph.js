// Graph of all nodes, where each node is a coordinate
class Graph {
  constructor(noOfVertices, grid) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
    this.grid = grid;
  }

  addNode(node) {
    this.AdjList.set(node, []);
    this.connectToAll(node);
  }

  connectToAll(node) {
    let [y, x] = node.getPos();
    for (let dY = -3; dY <= 3; dY++)
      for (let dX = -3; dX <= 3; dX++) {
        if (dX === 0 && dY === 0) continue;
        if (!this.inBound([y + dY, x + dX])) continue;
        
        let spot = this.grid[y + dY][x + dX];
        console.log(spot);
        // if (spot && spot.getSymbol() === 'HQ') debugger;
        if (spot && spot.deletable ) {
          if (spot.connectable && Math.sqrt(dX * dX + dY * dY) < spot.networkRange) this.addEdge(node, spot);
          if (node.connectable && Math.sqrt(dX * dX + dY * dY) < node.networkRange) this.addEdge(node, spot);
        }
      }
  }

  inBound(pos) {
    let [y, x] = pos;
    if (y < 0 || y >= this.grid.length || x < 0 || x >= this.grid[0].length)
      return false;
    return true;
  }

  addEdge(src, dest) {
    // debugger;
    this.AdjList.get(src).push(dest);
    this.AdjList.get(dest).push(src);
  }

  printGraph() {
    let vertices = this.AdjList.keys();

    for (let vertex of vertices) {
      let values = this.AdjList.get(vertex);
      let conc = "";

      for (let value of values)
        conc += `[${value.getPos()}] `;
        
      console.log(`[${vertex.getPos()}] -> ${conc}`);
    }
  }
}

export default Graph;