import React from 'react';

const panelStyle = {
  padding: "0.5rem",
} as React.CSSProperties;

interface Props {
  children?: React.ReactNode,
  style?: React.CSSProperties,
}

const Panel = ({ children, style}: Props) => (
  <div style={{...panelStyle, ...style}}>
    {children}
  </div>
);

export default Panel;
