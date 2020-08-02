import React, { useEffect, useState, ReactElement } from "react";
import createGrid, { Grid } from './lib/grid-creator';

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
};

const Grid = ({size}: {size: number}) => {
  const [grid, setGrid] = useState<Grid | undefined>();
  useEffect(() => {
    const grid = createGrid(size);
    setGrid(grid);
  }, [size]);
  return (
    <div>
      <div style={gridStyleCreator(size)}>
        {grid}
      </div>
    </div>
  )
};

export default Grid;
