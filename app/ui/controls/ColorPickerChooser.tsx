import React, { useEffect, useState } from 'react';
import { SketchPicker } from 'react-color';

const colorPickerChooserStyle = (opacity: number) => ({
  position: "absolute",
  left: "6.5rem",
  top: "0rem",
  opacity,
  transition: "0.25s opacity",
}) as React.CSSProperties;

interface ColorPickerChooserProps {
  color: string,
  setColor: (color: string) => void,
};

const ColorPickerChooser = ({
  color,
  setColor,
}: ColorPickerChooserProps): JSX.Element => {
  const [style, setStyle] = useState(colorPickerChooserStyle(0));
  useEffect(() => {
    setStyle(colorPickerChooserStyle(1));
  }, []);
  return <div style={style}>
    <SketchPicker
      color={color}
      disableAlpha={true}
      onChange={(c) => setColor(c.hex)}
    />
  </div>
};

export default ColorPickerChooser;