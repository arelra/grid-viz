import React from 'react';

const grid = {
  columnGap: "1rem",
  display: "grid",
  gridTemplateColumns: "minmax(max-content, 15%) auto",
  padding: "0.5rem",
  width: "100%",
}

interface Props {
  children: React.ReactNode,
}

const Layout = ({ children }: Props) =>
  <div style={grid}>{children}</div>

export default Layout;
