import React from "react";
import Layout from "./layout/Layout";
import Panel from "./layout/Panel";
import PanelLeft from "./layout/PanelLeft";
import Grid from "./grid/Grid";

const App = () => (
  <Layout>
    <Panel>
      <Grid/>
    </Panel>
  </Layout>
);

export default App;
