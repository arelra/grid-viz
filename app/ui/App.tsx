import React from "react";
import Layout from "./layout/Layout";
import Panel from "./layout/Panel";
import PanelLeft from "./layout/PanelLeft";

const App = () => (
  <Layout>
    <PanelLeft />
    <Panel />
  </Layout>
);

export default App;
