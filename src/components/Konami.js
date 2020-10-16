import React from 'react';
import {useKonami} from '../shared/hooks/useKonami';

export const Konami = () => {
  const callback = () => console.log('YEEEEEY');
  const newSequence = ['w', 'j'];
  const {sequence, rightSequence} = useKonami(newSequence, callback);

  return (
    <div>
      <h2>Konami Code</h2>
      <p>
        <img
          alt='konami code: cima cima baixo baixo esquerda direita esquerda direita b a'
          src='https://upload.wikimedia.org/wikipedia/commons/e/e2/Konami_Code.svg'
        />
        {sequence.map((key, i) => {
          console.log(key);
          return <strong key={i}>{key}</strong>;
        })}
      </p>
      {rightSequence && <h1>YEEEEEY!!</h1>}
    </div>
  );
};
