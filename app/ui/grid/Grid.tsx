import React from 'react';
import Cell from './Cell';

const N = 5;

const gridStyleCreator = (n: number) => {
  return {
    backgroundColor: 'lightgrey',
    border: "2px solid lightgrey",
    display: "grid",
    width: "400px",
    height: "400px",
    gridTemplateColumns: `repeat(${n}, 1fr)`,
    gridTemplateRows: `repeat(${n}, 1fr)`,
    gridGap: "2px",
  }
}

const createGrid = (n: number) => {
  const rows = [...Array(N)];
  const grid = rows.map((r, i) => [...Array(N)].map((c, j) =>
    <Cell row={i} col={j} />));
  return grid;
}

const Grid = () => {
  const grid = createGrid(N);
  console.log(grid);
  return (
    <div style={gridStyleCreator(N)}>
      {grid}
    </div>
  )
}

export default Grid;