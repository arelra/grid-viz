import React from 'react';
import { SketchPicker } from 'react-color';

const colorPickerChooserStyle = {
  position: "absolute",
  left: "6.5rem",
  top: "0rem",
} as React.CSSProperties;

interface ColorPickerChooserProps {
  color: string,
  setColor: (color: string) => void,
};

const ColorPickerChooser = ({
  color,
  setColor,
}: ColorPickerChooserProps): JSX.Element => (
  <div style={colorPickerChooserStyle}>
    <SketchPicker
      color={color}
      disableAlpha={true}
      onChange={(c) => setColor(c.hex)}
    />
  </div>
);

export default ColorPickerChooser;