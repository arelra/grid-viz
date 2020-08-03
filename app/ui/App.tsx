import React, { useState } from "react";
import Layout from "./Layout";
import Grid from "./grid/Grid";
import GridControls from './grid/GridControls';
import { createRandomFill } from "./grid/lib/grid-creator";

const DEFAULT_GRID_SIZE = 5;

const App = () => {
  const [size, setSize] = useState(DEFAULT_GRID_SIZE);
  const [fill, setFill] = useState(createRandomFill(size));
  return (
    <Layout>
      <GridControls
        size={size}
        setSize={setSize}
        setFill={setFill}
      />
      <Grid
        size={size}
        fill={fill}
      />
    </Layout>
  )
};

export default App;
