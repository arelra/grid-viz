import { ReactElement } from 'react';
import createGrid, { Grid } from './grid-creator';

const expectCellPosition = (
  grid: Grid,
  [row, col]: [number, number]
) => {
  expect(grid[row][col].props.row).toBe(row);
  expect(grid[row][col].props.col).toBe(col);
}

const expectCellFilled = (
  cell: ReactElement,
  filled: boolean = true,
) =>
  expect(cell.props.filled).toBe(filled);

test("an unfilled grid has the correct cell props 'row', 'col' and 'filled'", () => {
  const grid = createGrid(5, []);
  expectCellPosition(grid, [0,0]);
  expectCellPosition(grid, [0,4]);
  expectCellPosition(grid, [4,0]);
  expectCellPosition(grid, [4,4]);
  grid.forEach(row => {
    row.forEach(cell => {
      expect(cell.props.filled).toBe(false);
    })
  })
});

test("the default grid has the correct cells with prop 'filled=true'", () => {
  const grid = createGrid(5);
  expectCellFilled(grid[0][4]);
  expectCellFilled(grid[1][0]);
  expectCellFilled(grid[1][1]);
  expectCellFilled(grid[2][0]);
  expectCellFilled(grid[2][1]);
  expectCellFilled(grid[2][3]);
  expectCellFilled(grid[2][4]);
  expectCellFilled(grid[4][0]);
  expectCellFilled(grid[4][1]);
  expectCellFilled(grid[4][2]);
});

test("a custom grid has the correct cells with prop 'filled=true'", () => {
  const grid = createGrid(4, [[0, 1, 2, 3], [], [], [0, 1, 2, 3]]);
  grid[0].forEach((cell) => expectCellFilled(cell));
  grid[1].forEach((cell) => expectCellFilled(cell, false));
  grid[2].forEach((cell) => expectCellFilled(cell, false));
  grid[3].forEach((cell) => expectCellFilled(cell));
});