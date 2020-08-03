import React, { useState } from "react";
import ColorPickerToggle from './ColorPickerToggle';
import ColorPickerChooser from './ColorPickerChooser';

const colorPickerStyle = {
  display: "flex",
  position: "relative",
} as React.CSSProperties;

const colorPickerLabelStyle = {
  flex: "0 0 4rem",
} as React.CSSProperties;

interface ColorPickerProps {
  label: string;
  color: string;
  setColor: (value: string) => void;
}

const ColorPicker = ({ label, color, setColor }: ColorPickerProps) => {
  const [active, setActive] = useState(false);
  return (
    <div style={colorPickerStyle}>
      <div style={colorPickerLabelStyle}>{label}</div>
      <ColorPickerToggle
        color={color}
        toggleActive={() => setActive(!active)}
      />
      {active && <ColorPickerChooser color={color} setColor={setColor} />}
    </div>
  );
};

export default ColorPicker;
