import {useState, useEffect} from 'react';

export const useCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // document.title = `Count is ${count}`;
    // return () => {
    //   document.title = 'React app';
    // };
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return {
    count,
    increment,
    decrement,
  };
};
