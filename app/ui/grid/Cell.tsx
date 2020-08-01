import React, { useState } from 'react';

const cellStyle = (hover: boolean) => ({
  backgroundColor: hover ? 'red' : 'white',
});

interface Props {
  row: number,
  col: number,
};

const Cell = ({ row, col }: Props) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      data-row={row}
      data-col={col}
      onClick={() => console.log(`${row} ${col}`)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={cellStyle(hover)}
    >
    </div>
  )
};

export default Cell;