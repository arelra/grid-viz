import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const inactiveStyle = (col: string) => ({
  width: "2rem",
  height: "2rem",
  border: "1px solid lightgrey",
  backgroundColor: col,
});

interface ColorPickerInactiveProps {
  color: string,
  toggleActive: () => void,
};

const ColorPickerInactive = ({
  color,
  toggleActive,
}: ColorPickerInactiveProps): JSX.Element => (
  <div
    onClick={toggleActive}
    style={inactiveStyle(color)}>
  </div>
);

interface ColorPickerActiveProps {
  color: string,
  setColor: (color: string) => void,
};

const colorPickerActiveStyle = {
  position: "absolute",
  left: "8.5rem",
  top: "0rem",
} as React.CSSProperties;

const ColorPickerActive = ({
  color,
  setColor,
}: ColorPickerActiveProps): JSX.Element => (
  <div style={colorPickerActiveStyle}>
    <SketchPicker
      color={color}
      disableAlpha={true}
      onChange={(c) => setColor(c.hex)}
    />
  </div>
);

const colorPickerStyle = {
  display: "flex",
  position: "relative",
} as React.CSSProperties;

const colorPickerLabelStyle = {
  flex: "0 0 6rem",
} as React.CSSProperties;

const ColorPicker = ({label}: {label: string}) => {
  const [color, setColor] = useState("#F00");
  const [active, setActive] = useState(false);
  return (
    <div style={colorPickerStyle}>
      <div style={colorPickerLabelStyle}>{label}</div>
      <ColorPickerInactive
        color={color}
        toggleActive={() => setActive(!active)}
      />
      {active && <ColorPickerActive color={color} setColor={setColor} />}
    </div>
  );
};

export default ColorPicker;