import React, { useContext, useEffect, useState } from 'react';
import { GridAction } from './reducers/grid';
import { GridActionTypes, GridDispatchContext } from './Grid';
import { Colors } from '../types/color-types';

const cellStyle = (hover: boolean, filled: boolean, colors: Colors) => ({
  backgroundColor: hover ? colors.hover : (filled ? colors.filled : colors.unfilled),
  color: "white",
  display: "flex",
  fontSize: "24px",
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
  const [text, setText] = useState("");
  const {colors, state, dispatch} = useContext(GridDispatchContext);
  const handleClick = () => {
    const action: GridAction = {
      type: GridActionTypes.CLICK_CELL,
      payload: {
        pos: [row, col],
      },
    };
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
      dispatch(action);
    }
  }, [hover]);
  useEffect(() => {
    const key = `${row}-${col}`;
    state.clickCell.key === key ?
      setText(state.clickCell.text) : setText("");
    state.hoverCells.includes(key) ?
      setHover(true) : setHover(false);
  }, [state]);
  return (
    <div
      data-row={row}
      data-col={col}
      onClick={handleClick}
      onMouseEnter={() => { filled && setHover(true)} }
      style={cellStyle(hover, filled, colors)}
    >
      {text || null}
    </div>
  )
};

export default Cell;
