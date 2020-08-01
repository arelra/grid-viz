import React from 'react';

const panelStyle = {
  padding: "0.5rem",
  minHeight: "98vh",
} as React.CSSProperties;

const headerStyle = {
  color: "#444",
};

interface Props {
  children?: React.ReactNode,
  title?: string,
  style?: React.CSSProperties,
}

const Panel = ({ children, style, title }: Props) => (
  <div style={{ ...panelStyle, ...style }}>
    <div style={headerStyle}>
      {title}
    </div>
    {children}
  </div>
);

export default Panel;
