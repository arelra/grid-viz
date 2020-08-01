import React from 'react';
// @ts-ignore
import ReactGraphVis from "react-graph-vis";

const graph = {
  nodes: [
    { id: 1, label: "1", level: "0", font: {'face': 'Monospace', align: 'center'} },
    { id: 2, label: "2", level: "1", font: {'face': 'Monospace', align: 'center'} },
    { id: 3, label: "3", level: "1", font: {'face': 'Monospace', align: 'center'} },
    { id: 4, label: "4", level: "2", font: {'face': 'Monospace', align: 'center'} },
    { id: 5, label: "5", level: "2", font: {'face': 'Monospace', align: 'center'} },
  ],
  edges: [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
  ],
};

const options = {
  layout: {
    hierarchical: true,
  },
  edges: {
    color: "#AAA",
  },
  height: "400px",
};

const events = {
  select: function (event: any) {
    var { nodes, edges } = event;
  },
};

const Graph: React.FC = () => {
  return (
    <ReactGraphVis
      graph={graph}
      options={options}
      events={events}
      getNetwork={(network: any) => {}}
    />
  );
};

export default Graph;