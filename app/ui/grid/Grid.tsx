import React, { useState } from 'react';
import Cell from './Cell';
import SizeSlider from './SizeSlider';

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
    <Cell row={i} col={j} />));
  return grid;
}

const Grid = () => {
  const [size, setSize] = useState(N);
  // TODO make sure created only if N changes
  const grid = createGrid(size);
  console.log(`gridSize: ${size}`);
  return (
    <div>
      <SizeSlider size={size} setSize={setSize} />
      <div style={gridStyleCreator(size)}>
        {grid}
      </div>
    </div>
  )
}

export default Grid;