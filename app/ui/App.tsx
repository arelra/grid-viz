import React, { useState } from "react";
import Layout from "./Layout";
import Grid from "./grid/Grid";
import GridControls from './grid/GridControls';
import { createRandomFill } from "./grid/lib/grid-creator";

const DEFAULT_GRID_SIZE = 5;

const App = () => {
  const [size, setSize] = useState(DEFAULT_GRID_SIZE);
  const [fill, setFill] = useState(createRandomFill(size));
  const [colors, setColors] = useState({
    filled: "#F00",
    unfilled: "#0F0",
    hover: "#00F",
  });
  return (
    <Layout>
      <GridControls
        size={size}
        setSize={setSize}
        setFill={setFill}
        colors={colors}
        setColors={setColors}
      />
      <Grid
        size={size}
        fill={fill}
        colors={colors}
      />
    </Layout>
  )
};

export default App;
