import { createGrid, fillGrid } from './grid-creator';

test("create a grid and check the props", () => {
  const grid = createGrid(5);
  const topLeftCell = grid[0][0];
  expect(topLeftCell.props.row).toBe(0);
  expect(topLeftCell.props.col).toBe(0);
  const topRightCell = grid[0][4];
  expect(topRightCell.props.row).toBe(0);
  expect(topRightCell.props.col).toBe(4);
  const bottomLeftCell = grid[4][0];
  expect(bottomLeftCell.props.row).toBe(4);
  expect(bottomLeftCell.props.col).toBe(0);
  const bottomRightCell = grid[4][4];
  expect(bottomRightCell.props.row).toBe(4);
  expect(bottomRightCell.props.col).toBe(4);
  grid.forEach(row => {
    row.forEach(cell => {
      expect(cell.props.filled).toBe(false);
    })
  })
});

test("fill a grid with defaults and check the filled props", () => {
  const grid = createGrid(5);
  fillGrid(grid);
  expect(grid[0][4].props.filled).toBe(true);
  expect(grid[1][0].props.filled).toBe(true);
  expect(grid[1][1].props.filled).toBe(true);
  expect(grid[2][0].props.filled).toBe(true);
  expect(grid[2][1].props.filled).toBe(true);
  expect(grid[2][3].props.filled).toBe(true);
  expect(grid[2][4].props.filled).toBe(true);
  expect(grid[4][0].props.filled).toBe(true);
  expect(grid[4][1].props.filled).toBe(true);
  expect(grid[4][2].props.filled).toBe(true);
});

test("fill a custom grid with and check the filled props", () => {
  const grid = createGrid(4);
  fillGrid(grid, [
      [0,1,2,3],
      [],
      [],
      [0,1,2,3],
  ]);
  grid[0].forEach(cell => expect(cell.props.filled).toBe(true));
  grid[1].forEach(cell => expect(cell.props.filled).toBe(false));
  grid[2].forEach(cell => expect(cell.props.filled).toBe(false));
  grid[3].forEach(cell => expect(cell.props.filled).toBe(true));
});