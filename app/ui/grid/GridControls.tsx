import React from 'react';
import SizeSlider from './SizeSlider';
import ColorPicker from './ColorPicker';
import { createRandomFill } from './lib/grid-creator';

interface Colors {
  filled: string,
  unfilled: string,
  hover: string,
};
interface Props {
  size: number,
  setSize: (value: number) => void,
  setFill: (value: Array<Array<number>>) => void,
  colors: Colors,
  setColors: (value: Colors) => void,
};

const gridControlsStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "14rem",
  height: "10rem",
} as React.CSSProperties;

const handleRandom = (
  size: number,
  setFill: (value: Array<Array<number>>) => void,
) => {
  setFill(createRandomFill(size));
};

const GridControls = ({ size, setSize, setFill, colors, setColors }: Props) => {
  return (
    <div style={gridControlsStyle}>
      <SizeSlider size={size} setSize={setSize} />
      <input
        type="button"
        value="Random"
        onClick={() => handleRandom(size, setFill)}
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
