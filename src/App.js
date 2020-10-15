import React from 'react';
import {Background} from './Background';
import {Counter} from './Counter';
import {LocalStorage} from './LocalStorage';

function App() {
  return (
    <>
      <h1>Custom Hooks</h1>
      <Background />
      <hr />
      <Counter />
      <hr />
      <LocalStorage />
    </>
  );
}

export default App;
