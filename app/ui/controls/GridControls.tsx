import React from 'react';
import SizeSlider from './SizeSlider';
import ColorPicker from './ColorPicker';
import { Colors } from '../types/color-types';

const gridControlsStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "14rem",
  height: "10rem",
} as React.CSSProperties;

interface Props {
  size: number,
  setSize: (value: number) => void,
  fill: number,
  setFill: (value: number) => void,
  colors: Colors,
  setColors: (value: Colors) => void,
};

const handleRandom = (
  fill: number,
  setFill: (value: number) => void,
) => {
  setFill(fill + 1);
};

const GridControls = ({ size, setSize, fill, setFill, colors, setColors }: Props) => {
  return (
    <div style={gridControlsStyle}>
      <SizeSlider size={size} setSize={setSize} />
      <input
        type="button"
        value="Random"
        onClick={() => handleRandom(fill, setFill)}
      ></input>
      <ColorPicker
        label="filled"
        color={colors.filled}
        setColor={(col: string) => {
          setColors({ ...colors, ...{ filled: col } });
        }}
      />
      <ColorPicker
        label="unfilled"
        color={colors.unfilled}
        setColor={(col: string) => {
          setColors({ ...colors, ...{ unfilled: col } });
        }}
      />
      <ColorPicker
        label="hover"
        color={colors.hover}
        setColor={(col: string) => {
          setColors({ ...colors, ...{ hover: col } });
        }}
      />
    </div>
  );
};

export default GridControls;
