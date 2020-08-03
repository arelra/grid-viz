import React from 'react';
import SizeSlider from './SizeSlider';
import ColorPicker from './ColorPicker';
import { createRandomFill } from './lib/grid-creator';

interface Props {
  size: number,
  setSize: (value: number) => void,
  setFill: (value: Array<Array<number>>) => void,
};

const gridControlsStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "12rem",
  height: "10rem",
} as React.CSSProperties;

const handleRandom = (
  size: number,
  setFill: (value: Array<Array<number>>) => void,
) => {
  setFill(createRandomFill(size));
};

const GridControls = ({ size, setSize, setFill }: Props) => {
  return (
    <div style={gridControlsStyle}>
      <SizeSlider size={size} setSize={setSize} />
      <input type="button" value="Random" onClick={() => handleRandom(size, setFill)}></input>
      <ColorPicker label="filled colour" />
      <ColorPicker label="unfilled colour" />
      <ColorPicker label="hover colour" />
    </div>
  );
};

export default GridControls;
