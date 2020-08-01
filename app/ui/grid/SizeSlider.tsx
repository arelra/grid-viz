import React, { ChangeEvent, useState } from 'react';

interface Props {
  size: number,
  setSize: (value: number) => void,
}

const SizeSlider = ({ size, setSize }: Props) => {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSize(Number(event.target.value));
  }
  return (
    <div>
      <input
        id="sizeSlider"
        type="range"
        defaultValue={size}
        min="3"
        max="50"
        onChange={handleChange}
      />
      <label htmlFor="sizeSlider">{size} x {size}</label>
    </div>
  )
};

export default SizeSlider;
