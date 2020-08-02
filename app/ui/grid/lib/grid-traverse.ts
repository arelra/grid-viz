/**
 * input: NxN array:
 * [
 *   [Cell, Cell, Cell],
 *   [Cell, Cell, Cell],
 *   [Cell, Cell, Cell],
 * ]
 */

interface Cell {
  filled: boolean;
};

const traverse = (
  graph: Array<Array<Cell>>,
  [row, col]: [number, number]): Array<Cell> => {
    const startCell: Cell = graph[row][col];
    if (!startCell || !startCell.filled) {
      return [];
    }
    return [];
};

export default traverse;
