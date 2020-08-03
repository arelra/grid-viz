import React, {
  createContext,
  useEffect,
  useReducer,
} from "react";
import createGrid, { Grid } from './lib/grid-creator';
import { gridReducer, GridAction, GridActionTypes } from "./reducers/grid";
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
  grid: createGrid(5),
  hoverCells: [],
  clickCell: undefined,
};

export const GridDispatchContext =
  createContext<React.Dispatch<GridAction>>(() => null);

const Grid = ({size}: {size: number}) => {
  const [state, dispatch] = useReducer(gridReducer, defaultGridState);
  useEffect(() => {
    const grid = createGrid(size);
    const action: GridAction = {
      type: GridActionTypes.UPDATE_GRID,
      payload: {
        grid,
      },
    };
    dispatch(action);
  }, [size]);
  return (
    <div style={gridStyleCreator(size)}>
      <GridDispatchContext.Provider value={dispatch}>
        {state.grid}
      </GridDispatchContext.Provider>
    </div>
  );
};

export default Grid;
