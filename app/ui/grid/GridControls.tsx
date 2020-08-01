import React from 'react';
import SizeSlider from './SizeSlider';
import ColorPicker from './ColorPicker';

interface Props {
  size: number,
  setSize: (value: number) => void,
}

const gridControlsStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "10rem",
} as React.CSSProperties;

const GridControls = ({ size, setSize }: Props) => {
  return (
    <div style={gridControlsStyle}>
      <SizeSlider size={size} setSize={setSize} />
      <ColorPicker label="filled colour" />
      <ColorPicker label="unfilled colour" />
      <ColorPicker label="hover colour" />
    </div>
  );
};

export default GridControls;