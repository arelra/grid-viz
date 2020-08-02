import React from 'react';

const layoutStyle = {
  display: "grid",
  gridTemplateColumns: "minmax(max-content, 15%) auto",
  width: "100%",
  padding: "0.5rem",
} as React.CSSProperties;

interface Props {
  children?: React.ReactNode,
  style?: React.CSSProperties,
}

const Layout = ({ children, style}: Props) => (
  <div style={{...layoutStyle, ...style}}>
    {children}
  </div>
);

export default Layout;
