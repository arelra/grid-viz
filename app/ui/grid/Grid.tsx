import React, { createContext, useEffect, useRef, useState } from "react";
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

export const GridContext = createContext<Grid>([[]]);

const Grid = ({size}: {size: number}) => {
  const [grid, setGrid] = useState<Grid>(createGrid(5));
  useEffect(() => {
    const grid = createGrid(size);
    setGrid(grid);
  }, [size]);
  return (
    <div style={gridStyleCreator(size)}>
      <GridContext.Provider value={grid}>
        {grid}
      </GridContext.Provider>
    </div>
  );
};

export default Grid;
