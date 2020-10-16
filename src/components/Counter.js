import React from 'react';
import {useCount} from '../shared/hooks/useCount';

export const Counter = () => {
  const {count, increment, decrement} = useCount();

  return (
    <div>
      <h2>Counter: </h2>
      <div style={{display: 'inline-flex'}}>
        <button onClick={() => increment()}>+ Increment</button>
        <button onClick={() => decrement()}>- Decrement</button>
        <div style={{paddingLeft: '8px'}}>{count}</div>
      </div>
    </div>
  );
};
