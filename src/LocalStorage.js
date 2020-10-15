import React from 'react';
import {useLocalStorage} from './useLocalStorage';

export const LocalStorage = () => {
  const [name, setName] = useLocalStorage('name', '');
  return (
    <div>
      <h2>LocalStorage: </h2>
      <div>
        <label>Save a value: </label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
};
