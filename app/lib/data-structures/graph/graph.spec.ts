import Graph from './graph';

const graph1 = {
  "A": ["B", "C"]
}
const graph2 = {
  "A": ["B", "C"],
  "B": ["D", "E", "F"],
  "F": ["G"]
}

test("load simple graph", () => {
  const testGraph: Graph = new Graph(graph1);

  const adjacents = testGraph.getAdjacents('A');
  expect(Array.isArray(adjacents)).toBe(true);
  expect(adjacents[0].name).toBe('B');
  expect(adjacents[1].name).toBe('C');
});

test("load multi leve graph", () => {
  const testGraph: Graph = new Graph(graph2);

  let adjacents = testGraph.getAdjacents('A');
  expect(Array.isArray(adjacents)).toBe(true);
  expect(adjacents[0].name).toBe('B');
  expect(adjacents[1].name).toBe('C');

  adjacents = testGraph.getAdjacents('B');
  expect(Array.isArray(adjacents)).toBe(true);
  expect(adjacents[0].name).toBe('D');
  expect(adjacents[1].name).toBe('E');
  expect(adjacents[2].name).toBe('F');

  adjacents = testGraph.getAdjacents('F');
  expect(Array.isArray(adjacents)).toBe(true);
  expect(adjacents[0].name).toBe('G');
});

test("set root", () => {
  const testGraph: Graph = new Graph(graph2);

  expect(testGraph.getRoot()).toBe('A');
  testGraph.setRoot('B')
  expect(testGraph.getRoot()).toBe('B');
});

test("reset clears set root", () => {
  const testGraph: Graph = new Graph(graph2);
  testGraph.setRoot('B');

  expect(testGraph.getRoot()).toBe('B');
  testGraph.reset();
  expect(testGraph.getRoot()).toBe('A');
});