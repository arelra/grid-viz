import { Grid } from '../lib/grid-creator';
import { GridState } from '../Grid';
import { traverse } from "../lib/grid-traverse";

enum GridActionTypes {
  CLICK_CELL = "CLICK_CELL",
  HOVER_CELL = "HOVER_CELL",
  UPDATE_GRID = "UPDATE_GRID",
}

type GridActionPayloadForGrid = { grid: Grid };
type GridActionPayloadForCell = { pos: [number, number] };

type GridAction =
 | { type: GridActionTypes.UPDATE_GRID, payload: GridActionPayloadForGrid}
 | { type: GridActionTypes.CLICK_CELL, payload: GridActionPayloadForCell}
 | { type: GridActionTypes.HOVER_CELL, payload: GridActionPayloadForCell}

const gridReducer = (state: GridState, action: GridAction): GridState => {
  switch (action.type) {
    case GridActionTypes.UPDATE_GRID: {
      const newState = {
        grid: action.payload.grid,
        hoverCells: state.hoverCells,
        clickCell: state.clickCell,
      };
      return newState;
    }
    case GridActionTypes.CLICK_CELL: {
      const clickCell = action.payload.pos;
      const hoverCells = traverse(state.grid, clickCell);
      const newState = {
        grid: state.grid,
        hoverCells: state.hoverCells,
        clickCell: {
          pos: clickCell,
          text: String(hoverCells.length),
        },
      };
      return newState;
    }
    case GridActionTypes.HOVER_CELL: {
      const hoverCell = action.payload.pos;
      const hoverCells = traverse(state.grid, hoverCell);
      const newState = {
        grid: state.grid,
        hoverCells,
        clickCell: state.clickCell,
      };
      return newState;
    }
    default:
      return state;
  }
};

export {
  GridActionTypes,
  gridReducer,
};