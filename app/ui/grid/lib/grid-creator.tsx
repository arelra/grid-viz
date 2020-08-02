import React, { ReactElement } from 'react';
import Cell from "../Cell";

export type Cell = ReactElement;
export type Cells = Array<Cell>;
export type Grid = Array<Cells>;

const defaultFilled = [
  [4],
  [0, 1],
  [0, 1, 3, 4],
  [],
  [0, 1, 2],
];

/**
 * Creates a grid of Cells
 * 
 * @param size size of N for NxN grid
 * @param fill [[]] fill positions e.g. [ [0,1,2], [0], []]
 */
const createGrid = (
  size: number,
  fill: Array<Array<number>> = defaultFilled
): Grid => {
  const rows = [...Array(size)];
  const grid = rows.map((r, i) =>
    [...Array(size)].map((c, j) => {
      const filled = fill[i] ? fill[i].includes(j) : false;
      return <Cell key={`${i}-${j}`} row={i} col={j} filled={filled} />;
    })
  );
  return grid;
};  

export default createGrid;
