import DFS from './depth-first-search';
import Graph from '../../data-structures/graph/graph';

const graph1 = {
  "A": ["B", "C"]
}

const graph2 = {
  "A": ["B", "C"],
  "B": ["D", "E", "F"],
  "F": ["G"]
}

const graphCyclic = {
  "A": ["B", "C"],
  "B": ["A", "D"],
  "C": ["A", "D"],
  "D": ["B", "C"]
}

test("intialise DFS", () => {
  const dfs = new DFS(new Graph(graph1))
  expect(dfs.hasVisited('A')).toBe(false);
  expect(dfs.hasVisited('B')).toBe(false);
  expect(dfs.hasVisited('C')).toBe(false);
});

test("traverse simple graph", () => {
  const dfs = new DFS(new Graph(graph1))
  const traversal = dfs.traverse();
  expect(dfs.hasVisited('A')).toBe(true);
  expect(dfs.hasVisited('B')).toBe(true);
  expect(dfs.hasVisited('C')).toBe(true);
  expect(traversal.preorder).toEqual(['A', 'B', 'C']);
});

test("traverse multi level graph", () => {
  const dfs = new DFS(new Graph(graph2))
  const traversal = dfs.traverse();
  expect(dfs.hasVisited('A')).toBe(true);
  expect(dfs.hasVisited('B')).toBe(true);
  expect(dfs.hasVisited('E')).toBe(true);
  expect(dfs.hasVisited('F')).toBe(true);
  expect(dfs.hasVisited('G')).toBe(true);
  
  expect(traversal.preorder).toEqual(['A', 'B', 'D', 'E', 'F', 'G', 'C']);
});

test("traverse simple cyclic graph", () => {
  const dfs = new DFS(new Graph(graphCyclic))
  const traversal = dfs.traverse();
  expect(dfs.hasVisited('A')).toBe(true);
  expect(dfs.hasVisited('B')).toBe(true);
  expect(dfs.hasVisited('C')).toBe(true);
  expect(dfs.hasVisited('D')).toBe(true);

  expect(traversal.preorder).toEqual(['A', 'B', 'D', 'C']);
});