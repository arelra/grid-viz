import Graph from "../../data-structures/graph/graph";
import Stack from "../../data-structures/stack/stack";
import Vertex from '../../data-structures/graph/vertex';

interface Traversal {
  preorder: Array<string>,
}

class DepthFirstSearch {
  graph: Graph;
  stack: Stack<string>;
  visited: Set<string>;
  preorder: Array<string>;

  constructor(graph: Graph) {
    this.graph = graph;
    this.stack = new Stack<string>();
    this.visited = new Set();
    this.preorder = [];
  }
  addPreorder(vertexName: string): void {
    this.preorder = [...this.preorder, vertexName];
  }
  markVisited(vertexName: string): void {
    this.visited.add(vertexName);
  }
  hasVisited(vertexName: string): boolean {
    return this.visited.has(vertexName);
  }
  traverse(): Traversal {
    this.reset();
    const root: string = this.graph.getRoot();
    this.stack.push(root);
    this.markVisited(root);

    while (!this.stack.isEmpty()) {
      const vertexName = this.stack.pop();
      this.addPreorder(vertexName);
      // TODO: allow option of left->right or right->left traversal
      // currently reversed to push left -> right order onto stack
      const adjacentVertices = this.graph.getAdjacents(vertexName).reverse();
      adjacentVertices.forEach((adjacentVertex) => {
        const adjacentVertexName = adjacentVertex.getName();
        if (!this.hasVisited(adjacentVertexName)) {
          this.stack.push(adjacentVertexName);
          this.markVisited(adjacentVertexName);
        }
      });
    }
    return {
      preorder: this.preorder,
    };
  }
  traverse2(
    graph: Graph,
    stack: Stack<Vertex>,
    visited: Set<string>,
    order: Array<string>) {
    if (!stack.isEmpty()) {
      const vertex: Vertex = stack.pop();
      order.push(vertex.getName());
      const adjacentVertices: Array<Vertex> = graph.getAdjacents(vertex.getName()).reverse();
      adjacentVertices.forEach((adjacentVertex: Vertex) => {
        const adjacentVertexName = adjacentVertex.getName();
        if (!visited.has(adjacentVertexName)) {
          stack.push(adjacentVertex);
          visited.add(adjacentVertexName);
        }
      });
    }
    return {
      graph,
      stack,
      visited,
      order,
      done: stack.isEmpty(),
    }
  }
  reset(): void {
    this.graph.reset();
    this.visited.clear();
    this.stack.clear();
    this.preorder = [];
  }
}

export default DepthFirstSearch;