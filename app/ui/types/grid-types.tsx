import React, { ReactElement } from "react";

export type Cell = ReactElement;
export type Cells = Array<Cell>;
export type Grid = Array<Cells>;

export type Fill = Array<Array<number>>;

export type Position = [number, number];