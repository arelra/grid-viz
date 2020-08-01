import Vertex from './vertex';

class Edge {
  edge: [Vertex, Vertex];
  constructor(vertex1: Vertex, vertex2: Vertex) {
    this.edge = [vertex1, vertex2];
  }
  getEdge(): [Vertex, Vertex] {
    return this.edge;
  }
}

export default Edge;