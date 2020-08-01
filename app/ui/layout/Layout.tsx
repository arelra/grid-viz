import React from 'react';

const grid = {
  columnGap: "8px",
  display: "grid",
  gridTemplateColumns: "minmax(max-content, 10%) auto",
  padding: "0.5rem",
  width: "100%",
}

interface Props {
  children: React.ReactNode,
}

const Layout = ({ children }: Props) =>
  <div style={grid}>{children}</div>

export default Layout;
