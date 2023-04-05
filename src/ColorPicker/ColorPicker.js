import React from 'react';
import { useRecoilState } from 'recoil';
import { colorState } from './colorState';

function ColorPicker() {
  const [color, setColor] = useRecoilState(colorState);

  const handleClick = () => {
    if (color === 'blue') {
      setColor('red');
    } else {
      setColor('blue');
    }
  };

  return (
    <div>
      <h3 style={{ color: color }}>Hi, I change the color on clicking the button</h3>
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
}

export default ColorPicker;
