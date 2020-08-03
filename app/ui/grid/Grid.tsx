import React, {
  createContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import createGrid, { Grid } from './lib/grid-creator';
import { gridReducer } from './reducers/grid';
export { GridActionTypes } from './reducers/grid';

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

export interface GridState {
  grid: Grid,
  hoverCells: Array<string>,
  clickCell: {
    pos: [number, number],
    text: string,
  } | undefined,
}

const defaultGridState: GridState = {
  grid: [[]],
  hoverCells: [],
  clickCell: undefined,
};

export const GridDispatchContext =
  createContext<React.Dispatch<any>>(() => null);

const Grid = ({size}: {size: number}) => {
  const [grid, setGrid] = useState<Grid>(createGrid(5));
  const [state, dispatch] = useReducer(gridReducer, defaultGridState);
  useEffect(() => {
    const grid = createGrid(size);
    setGrid(grid);
  }, [size]);
  return (
    <div style={gridStyleCreator(size)}>
      <GridDispatchContext.Provider value={dispatch}>
        {grid}
      </GridDispatchContext.Provider>
    </div>
  );
};

export default Grid;
