import React, { useState, ReactElement } from 'react';
import { createGrid, fillGrid } from './lib/grid-creator';

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

const Grid = ({size}: {size: number}) => {
  const grid = createGrid(size);
  fillGrid(grid);
  return (
    <div>
      <div style={gridStyleCreator(size)}>
        {grid}
      </div>
    </div>
  )
}

export default Grid;
