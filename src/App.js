import React from 'react';
import {Background} from './components/Background';
import {Counter} from './components/Counter';
import {LocalStorage} from './components/LocalStorage';
import {Mobile} from './components/Mobile';
import {Fetch} from './components/Fetch';

function App() {
  return (
    <>
      <h1>Custom Hooks</h1>
      <Background />
      <hr />
      <Counter />
      <hr />
      <LocalStorage />
      <hr />
      <Mobile />
      <hr />
      <Fetch />
    </>
  );
}

export default App;
