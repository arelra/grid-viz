import React, { useState, ReactElement } from 'react';
import Cell from './Cell';
import GridControls from './GridControls';

const N = 5;

const gridStyleCreator = (n: number) => {
  return {
    backgroundColor: 'lightgrey',
    border: "2px solid lightgrey",
    display: "grid",
    width: "80vw",
    height: "80vw",
    gridTemplateColumns: `repeat(${n}, 1fr)`,
    gridTemplateRows: `repeat(${n}, 1fr)`,
    gridGap: "2px",
  }
}

const createGrid = (size: number) => {
  const rows = [...Array(size)];
  const grid = rows.map((r, i) => [...Array(size)].map((c, j) =>
    <Cell
      key={`${i}-${j}`}
      row={i}
      col={j}
    />));

  return grid;
}

const setFilled = (grid: Array<Array<ReactElement>>) => {
  const filled: Array<Array<number>> = [
    [4],
    [0,1],
    [0,1,3,4],
    [],
    [0,1,2]
  ];
  filled.forEach((colArray, row) => {
    colArray.forEach(col => {
      grid[row][col] = <Cell key={`${row}-${col}`} row={row} col={col} filled={true} />;
    })
  })
}

const Grid = () => {
  const [size, setSize] = useState(N);
  // TODO make sure created only if N changes
  const grid = createGrid(size);
  setFilled(grid);
  return (
    <div>
      <GridControls size={size} setSize={setSize} />
      <div style={gridStyleCreator(size)}>
        {grid}
      </div>
    </div>
  )
}

export default Grid;