import React, { ReactElement } from 'react';
import Cell from "../Cell";

const createGrid = (size: number): JSX.Element[][] => {
  const rows = [...Array(size)];
  const grid = rows.map((r, i) =>
  [...Array(size)].map((c, j) => (
      <Cell key={`${i}-${j}`} row={i} col={j} filled={false} />
    ))
  );
  return grid;
};
  
const defaultFilled = [
  [4],
  [0, 1],
  [0, 1, 3, 4],
  [],
  [0, 1, 2],
];

// TODO make immutable
const fillGrid = (
  grid: Array<Array<ReactElement>>,
  fill: Array<Array<number>> = defaultFilled
) => {
  fill.forEach((colArray, row) => {
    colArray.forEach((col) => {
      grid[row][col] = (
        <Cell key={`${row}-${col}`} row={row} col={col} filled={true} />
      );
    });
  });
};

export {
  createGrid,
  fillGrid,
};
