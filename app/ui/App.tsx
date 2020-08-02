import React, { useState } from "react";
import Layout from "./Layout";
import Grid from "./grid/Grid";
import GridControls from './grid/GridControls';

const DEFAULT_GRID_SIZE = 5;

const App = () => {
  const [size, setSize] = useState(DEFAULT_GRID_SIZE);
  return (
    <Layout>
      <GridControls size={size} setSize={setSize} />
      <Grid size={size} />
    </Layout>
  )
};

export default App;
