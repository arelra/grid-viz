import { ReactElement } from 'react';
import { getAdjacentCells, traverse } from "./grid-traverse";
import { createGrid } from "./grid-creator";
import { Grid } from "./grid-types";

// ------- helper functions

const hasCell = (cells: Array<ReactElement>, key: string): boolean =>
  cells.some(cell => cell.key === key)

const hasVisited = (visited: Array<string>, key: string): boolean =>
  visited.some((visit) => visit === key);

const expectAdjacentCells = (
  grid: Grid,
  startingCell: [number, number],
  expectedKeys: Array<string>,
) => {
  const adjacentCells = getAdjacentCells(grid, startingCell);
  expect(adjacentCells.length).toBe(expectedKeys.length);
  for(const expectedKey of expectedKeys) {
    expect(hasCell(adjacentCells, expectedKey)).toBe(true);
  }
}

const expectVisited = (
  grid: Grid,
  startingCell: [number, number],
  expectedKeys: Array<string>,
) => {
  const visited = traverse(grid, startingCell);
  expect(visited.length).toBe(expectedKeys.length);
  for(const expectedKey of expectedKeys) {
    expect(hasVisited(visited, expectedKey)).toBe(true);
  }
}

// ------- tests

test("traverse default grid starting from an empty cell returns an empty list", () => {
  const grid = createGrid(5);
  expect(traverse(grid, [0, 0])).toStrictEqual([]);
});

/**
 * default grid:
 * [
 *   [0,0,0,0,1],
 *   [1,1,0,0,0],
 *   [1,1,0,1,1],
 *   [0,0,0,0,0],
 *   [1,1,1,0,0],
 * ]
 */
test('get adjacent filled cells of the default grid', () => {
  const grid = createGrid(5);
  // row 0
  expectAdjacentCells(grid, [0,0], ["1-0"]);
  expectAdjacentCells(grid, [0,4], []);
  // row 1
  expectAdjacentCells(grid, [1, 0], ["1-1", "2-0"]);
  expectAdjacentCells(grid, [1, 1], ["1-0", "2-1"]);
  // row 2
  expectAdjacentCells(grid, [2, 0], ["1-0", "2-1"]);
  expectAdjacentCells(grid, [2, 1], ["2-0", "1-1"]);
  expectAdjacentCells(grid, [2, 3], ["2-4"]);
  expectAdjacentCells(grid, [2, 4], ["2-3"]);
  // row 4
  expectAdjacentCells(grid, [4, 0], ["4-1"]);
  expectAdjacentCells(grid, [4, 1], ["4-0", "4-2"]);
  expectAdjacentCells(grid, [4, 2], ["4-1"]);
});

/**
 * default grid:
 * [
 *   [0,0,0,0,1],
 *   [1,1,0,0,0],
 *   [1,1,0,1,1],
 *   [0,0,0,0,0],
 *   [1,1,1,0,0],
 * ]
 */
test('traverse default grid from filled cells returns all connected cells', () => {
  const grid = createGrid(5);
  // row 0
  expectVisited(grid, [0, 0], []);
  expectVisited(grid, [0, 4], ["0-4"]);
  // row 1
  expectVisited(grid, [1, 0], ["1-0", "1-1", "2-0", "2-1"]);
  expectVisited(grid, [1, 1], ["1-0", "1-1", "2-0", "2-1"]);
  // row 2
  expectVisited(grid, [2, 0], ["1-0", "1-1", "2-0", "2-1"]);
  expectVisited(grid, [2, 1], ["1-0", "1-1", "2-0", "2-1"]);
  expectVisited(grid, [2, 3], ["2-3", "2-4"]);
  expectVisited(grid, [2, 4], ["2-3", "2-4"]);
  // row 4
  expectVisited(grid, [4, 0], ["4-1", "4-1", "4-2"]);
  expectVisited(grid, [4, 1], ["4-1", "4-1", "4-2"]);
  expectVisited(grid, [4, 2], ["4-1", "4-1", "4-2"]);
});

test("traverse fully filled grids", () => {
  let grid = createGrid(1, [[0]]);
  expectVisited(grid, [0, 0], ["0-0"]);

  grid = createGrid(2, [[0,1],[0,1]]);
  expectVisited(grid, [0, 0], ["0-0", "0-1", "1-0", "1-1"]);

  grid = createGrid(10, [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  ]);
  expect(traverse(grid, [0, 0]).length).toBe(100);
});

test("traverse circular fill pattern", () => {
  let grid = createGrid(3, [
    [0, 1, 2],
    [0, 2],
    [0, 1, 2],
  ]);
  expectVisited(
    grid,
    [0, 0],
    ["0-0", "0-1", "0-2", "1-0", "1-2", "2-0", "2-1", "2-2"]
  );
});

test("traverse diagonal fill pattern", () => {
  let grid = createGrid(3, [
    [0, 2],
    [1],
    [0, 2],
  ]);
  expectVisited(grid, [0, 0], ["0-0"]);
  expectVisited(grid, [0, 2], ["0-2"]);
  expectVisited(grid, [1, 1], ["1-1"]);
  expectVisited(grid, [2, 0], ["2-0"]);
  expectVisited(grid, [2, 2], ["2-2"]);
});
