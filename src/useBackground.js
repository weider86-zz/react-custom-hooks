import {useState, useEffect} from 'react';

export const useBackground = () => {
  const [value, setValue] = useState('tomato');

  useEffect(() => {
    document.body.style.backgroundColor = value;
  }, [value]);

  return [value, setValue];
};
