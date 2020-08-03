import React from 'react';
import { Grid } from './grid-types';
import Cell from "../Cell";

/**
 * Creates a grid of Cells
 * 
 * @param size size of N for NxN grid
 * @param fill [[]] fill positions e.g. [ [0,1,2], [0], []]
 */
const createGrid = (
  size: number,
  fill: Array<Array<number>>
): Grid => {
  const rows = [...Array(size)];
  const grid = rows.map((r, i) =>
    [...Array(size)].map((c, j) => {
      const filled = fill[i] ? fill[i].includes(j) : false;
      return <Cell key={`${i}-${j}`} row={i} col={j} filled={filled} />;
    })
  );
  return grid;
};

const rand = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);

const randInterval = (size: number, div: number) =>
  Math.floor(size / div);

const createRandomFill = (
  size: number,
): Array<Array<number>> => {
  // random number of iterations per line
  const iterations = [
    randInterval(size, 5),
    randInterval(size, 4),
    randInterval(size, 3),
    randInterval(size, 2),
    randInterval(size, 1),
  ];
  const fill = [];
  for (let i = 0; i < size; i++) {
    const iteration = iterations[rand(0, iterations.length)];
    const row = [];
    for (let j = 0; j < iteration; j++) {
      row.push(rand(0, size));
    }
    fill.push(row);
  }
  return fill;
};

export {
  createGrid,
  createRandomFill,
};