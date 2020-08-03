import React, { useContext, useEffect, useState } from 'react';
import { GridAction } from './reducers/grid';
import {
  GridActionTypes,
  GridDispatchContext
} from './Grid';

const cellStyle = (hover: boolean, filled: boolean) => ({
  backgroundColor: hover ? 'pink' : (filled ? 'red' : 'white'),
  color: "white",
  display: "flex",
  fontSize: "32px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}) as React.CSSProperties;

interface Props {
  col: number,
  row: number,
  filled: boolean,
};

const Cell = ({ row, col, filled }: Props) => {
  const [hover, setHover] = useState(false);
  const dispatch = useContext(GridDispatchContext);
  const handleClick = () => {
    const action: GridAction = {
      type: GridActionTypes.CLICK_CELL,
      payload: {
        pos: [row, col],
      },
    };
    console.log(action);
    dispatch(action);
  }
  useEffect(() => {
    if (hover) {
      const action: GridAction = {
        type: GridActionTypes.HOVER_CELL,
        payload: {
          pos: [row, col],
        },
      };
      console.log(action);
      dispatch(action);
    }
  }, [hover]);
  return (
    <div
      data-row={row}
      data-col={col}
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={cellStyle(hover, filled)}
    >
      
    </div>
  )
};

export default Cell;
