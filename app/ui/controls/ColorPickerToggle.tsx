import React, { ReactElement } from "react";

const toggleStyle = (color: string) => ({
  width: "1.5rem",
  height: "1.5rem",
  border: "1px solid lightgrey",
  backgroundColor: color,
  cursor: "pointer",
});

interface ColorPickerToggle {
  color: string;
  toggleActive: () => void;
}

const ColorPickerToggle = ({
  color,
  toggleActive,
}: ColorPickerToggle): ReactElement => (
  <div onClick={toggleActive} style={toggleStyle(color)}></div>
);

export default ColorPickerToggle;
