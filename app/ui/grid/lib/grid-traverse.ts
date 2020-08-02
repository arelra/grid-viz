import { ReactElement } from "react";
import { Grid, Cell, Cells } from "./grid-creator";
import Stack from "./stack";

/**
 * Gets adjacent cells given a start position. Assumes start position is a filled cell. 
 * Cells are considered connected if they are:
 * - horizontal or vertical
 * - filled
 * @param grid
 * @param startPosition
 */
const getAdjacentCells = (
  grid: Grid,
  [row, col]: [number, number]
): Cells => {
  const adjacentCells: Array<Array<number>> = [
    [row - 1, col], // top
    [row, col + 1], // right
    [row + 1, col], // bottom
    [row, col - 1], // left
  ];
  const filledAdjacentCells: Cells = adjacentCells.reduce(
    (acc: Cells, item: Array<number>) => {
      const [row, col] = item;
      const cell = grid[row] ? grid[row][col] : undefined;
      if (cell && cell.props.filled) {
        return [...acc, cell];
      }
      return acc;
    },[]);
  return filledAdjacentCells;
};

const getPositionString = (cell: ReactElement) =>
  `${cell.props.row}-${cell.props.col}`;

const visitCell = <T extends ReactElement>(
  stack: Stack<T>,
  visited: Array<string>,
  cell: T
) => {
  stack.push(cell);
  visited.push(getPositionString(cell));
};

/**
 * Depth first search of grid to return connected cells
 * 
 * @param grid
 * @param startPosition 
 */
 const traverse = (
  grid: Grid,
  [row, col]: [number, number]
): Array<string> => {
  const stack = new Stack<Cell>();
  const visited: Array<string> = [];
  const startCell: Cell = grid[row][col];
  if (!startCell || !startCell.props.filled) {
    return [];
  }
  visitCell(stack, visited, startCell);
  while (!stack.isEmpty()) {
    const cell = stack.pop();
    const adjacentCells = getAdjacentCells(grid, [
      cell.props.row,
      cell.props.col,
    ]);
    for (const adjCell of adjacentCells) {
      if (!visited.includes(getPositionString(adjCell))) {
        visitCell(stack, visited, adjCell);
      }
    }
  }
  return visited;
};

export {
  getAdjacentCells,
  traverse
};
