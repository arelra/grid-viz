import React, { useContext, useState } from 'react';
import { GridContext } from './Grid';
import { traverse } from './lib/grid-traverse';

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
  const [isFilled, setFilled] = useState(filled);
  const [text, setText] = useState("");
  const grid = useContext(GridContext);
  return (
    <div
      data-row={row}
      data-col={col}
      onClick={() => setText(String(traverse(grid, [row, col]).length))}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={cellStyle(hover, isFilled)}
    >
      {text ? text: null}
    </div>
  )
};

export default Cell;
