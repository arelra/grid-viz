import React, {
  createContext,
  useEffect,
  useReducer,
} from "react";
import { createGrid } from "./lib/grid-creator";
import { Grid } from "./lib/grid-types";
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
    key: string,
    text: string,
  },
};

const defaultGridState: GridState = {
  grid: [[]],
  hoverCells: [],
  clickCell: {
    key: "",
    text: "",
  },
};

export const GridDispatchContext =
  createContext<{
    state: GridState;
    dispatch: React.Dispatch<GridAction>
  }>({
    state: defaultGridState,
    dispatch: () => null
  });

const Grid = (
  { size, fill }: 
  { size: number, fill: Array<Array<number>>}) => {
  const [state, dispatch] = useReducer(gridReducer, defaultGridState);
  useEffect(() => {
    console.log(fill);
    const grid = createGrid(size, fill);
    const action: GridAction = {
      type: GridActionTypes.UPDATE_GRID,
      payload: {
        grid,
      },
    };
    dispatch(action);
  }, [size, fill]);
  return (
    <div style={gridStyleCreator(size)}>
      <GridDispatchContext.Provider value={{state, dispatch}}>
        {state.grid}
      </GridDispatchContext.Provider>
    </div>
  );
};

export default Grid;
