// TODO JSDOC
import Stack from "./stack";

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

const getPositionString = <T extends JSX.Element>(cell: T) =>
  `${cell.props.row}-${cell.props.col}`;

const visitCell = <T extends JSX.Element>(
  stack: Stack<T>,
  visited: Array<string>,
  cell: T,
) => {
  stack.push(cell);
  visited.push(getPositionString(cell));
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
): Array<string> => {
  const stack = new Stack<T>();
  const visited: Array<string> = [];
  const startCell: T = graph[row][col];
  if (!startCell || !startCell.props.filled) {
    return [];
  }
  visitCell(stack, visited, startCell);
  while(!stack.isEmpty()) {
    const cell: T = stack.pop();
    const pos: [number, number] = [cell.props.row, cell.props.col];
    const adjacentCells: Array<T> = getAdjacentCells(graph, pos);
    for (const adjCell of adjacentCells) {
      if (!visited.includes(getPositionString(adjCell))) {
        visitCell(stack, visited, adjCell);
      }
    }
  }
  return visited;
};

export {
  getAdjacentCells,
  traverse
};
