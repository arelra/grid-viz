import React, { useState } from 'react';

const cellStyle = (hover: boolean, filled: boolean) => ({
  backgroundColor: hover ? 'pink' : (filled ? 'red' : 'white'),
});

interface Props {
  col: number,
  row: number,
  filled: boolean,
};

const Cell = ({ row, col, filled }: Props) => {
  const [hover, setHover] = useState(false);
  const [isFilled, setFilled] = useState(filled);
  return (
    <div
      data-row={row}
      data-col={col}
      onClick={() => setFilled(!isFilled)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={cellStyle(hover, isFilled)}
    >
      
    </div>
  )
};

export default Cell;