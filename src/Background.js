import React from 'react';
import {useBackground} from './useBackground';

export const Background = () => {
  const [color, setColor] = useBackground();

  return (
    <div>
      <h2>Background:</h2>
      <label>Insert a color: </label>
      <input
        type='text'
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
};
