// TODO JSDOC

const getAdjacentCells = <T extends JSX.Element>(
  grid: Array<Array<T>>,
  [row, col]: [number, number]
): Array<T> => {
  const adjacentCells: Array<Array<number>> = [
    [row - 1, col], // top
    [row, col + 1], // right
    [row + 1, col], // bottom
    [row, col - 1], // left
  ];
  const filledAdjacentCells: Array<T> = adjacentCells.reduce(
    (acc: Array<T>, item: Array<number>) => {
      const [row, col] = item;
      const cell = grid[row] ? grid[row][col] : undefined;
      if (cell && cell.props.filled) {
        return [...acc, cell];
      }
      return acc;
    },[]);
  return filledAdjacentCells;
};

/**
 * input: NxN array:
 * [
 *   [Cell, Cell, Cell],
 *   [Cell, Cell, Cell],
 *   [Cell, Cell, Cell],
 * ]
 */
const traverse = <T extends JSX.Element>(
  graph: Array<Array<T>>,
  [row, col]: [number, number]
): Array<T> => {
  const startCell: T = graph[row][col];
  if (!startCell || !startCell.props.filled) {
    return [];
  }
  return [];
};

export {
  getAdjacentCells,
  traverse
};
