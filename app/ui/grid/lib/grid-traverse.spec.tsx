import { getAdjacentCells, traverse } from "./grid-traverse";
import { createGrid, fillGrid } from './grid-creator';

test("traverse starting from an empty cell returns an empty list", () => {
  const grid = createGrid(5);
  fillGrid(grid);
  expect(traverse(grid, [0, 0])).toStrictEqual([]);
});

test('get adjacent filled cells of the default grid', () => {
  const grid = createGrid(5);
  fillGrid(grid);
  let adjacentCells = getAdjacentCells(grid, [0, 0]);
  expect(adjacentCells.length).toBe(1);
  adjacentCells = getAdjacentCells(grid, [0, 4]);
  expect(adjacentCells.length).toBe(0);
  adjacentCells = getAdjacentCells(grid, [1, 0]);
  expect(adjacentCells.length).toBe(2);
  adjacentCells = getAdjacentCells(grid, [1, 1]);
  expect(adjacentCells.length).toBe(2);
  adjacentCells = getAdjacentCells(grid, [2, 0]);
  expect(adjacentCells.length).toBe(2);
  adjacentCells = getAdjacentCells(grid, [2, 1]);
  expect(adjacentCells.length).toBe(2);
  adjacentCells = getAdjacentCells(grid, [2, 3]);
  expect(adjacentCells.length).toBe(1);
  adjacentCells = getAdjacentCells(grid, [2, 4]);
  expect(adjacentCells.length).toBe(1);
  adjacentCells = getAdjacentCells(grid, [4, 0]);
  expect(adjacentCells.length).toBe(1);
  adjacentCells = getAdjacentCells(grid, [4, 1]);
  expect(adjacentCells.length).toBe(2);
  adjacentCells = getAdjacentCells(grid, [4, 2]);
  expect(adjacentCells.length).toBe(1);
});
