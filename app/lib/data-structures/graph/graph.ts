import Vertex from './vertex';

interface AdjacencyList<T> {
  [key: string]: Array<T>
}

class Graph {
  root: string | undefined;
  adjacencyList: AdjacencyList<Vertex>;
  constructor(adjacencyList: AdjacencyList<string>) {
    this.adjacencyList = this.load(adjacencyList);
  }
  /**
   * @param adjacencyListObject A graph adjacency list e.g. { a: {b,c}, b: {d,e}, c: {g} }
   */
  load(adjacencyListObject: AdjacencyList<string>): AdjacencyList<Vertex> {
    return Object.entries(adjacencyListObject)
        .reduce(
          (acc: AdjacencyList<Vertex>, [vertexName, adjacents]) => {
            acc[vertexName] = adjacents.map(v => new Vertex(v));
            return acc;
        }, {});
  }
  getAdjacents(vertexName: string): Array<Vertex> {
    return this.adjacencyList[vertexName] || [];
  }
  getRoot(): string {
    // return the defined root, otherwise the first vertex name
    return this.root || Object.keys(this.adjacencyList)[0];
  }
  // TODO: check vertex exists
  setRoot(name: string): void {
    this.root = name;
  }
  reset() : void {
    this.root = undefined;
  }
  printEdges(): void {
    for (let adjacency in this.adjacencyList) {
      const key: string = adjacency;
      const value: Array<Vertex> = this.adjacencyList[key];
      console.log(key, value);
    }
  }
}

export default Graph;