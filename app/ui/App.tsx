import React, { useState } from "react";
import Panel from "./layout/Panel";
import Grid from "./grid/Grid";
import GridControls from './grid/GridControls';

const DEFAULT_GRID_SIZE = 5;

const layoutStyle = {
  display: "grid",
  gridTemplateColumns: "minmax(max-content, 15%) auto",
  width: "100%",
};

const App = () => {
  const [size, setSize] = useState(DEFAULT_GRID_SIZE);
  return (
    <Panel style={layoutStyle}>
      <GridControls size={size} setSize={setSize} />
      <Grid size={size} />
    </Panel>
  )
};

export default App;
