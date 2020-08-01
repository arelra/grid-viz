import React from "react";
import Panel from "./Panel";

const panelLeftStyle = {
  borderRight: "1px solid lightgrey",
}

const PanelLeft = () => (
  <Panel style={panelLeftStyle} title="experiments" />
);

export default PanelLeft;
