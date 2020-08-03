import React, { useState } from "react";
import Layout from "./Layout";
import Grid from "./grid/Grid";
import GridControls from './controls/GridControls';

const DEFAULT_GRID_SIZE = 10;

const App = () => {
  const [size, setSize] = useState(DEFAULT_GRID_SIZE);
  const [fill, setFill] = useState(0);
  const [colors, setColors] = useState({
    filled: "#4A69ED",
    unfilled: "#EEE",
    hover: "#F800CF",
  });
  return (
    <Layout>
      <GridControls
        size={size}
        setSize={setSize}
        fill={fill}
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
