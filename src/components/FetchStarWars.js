import React, {useState} from 'react';
import {useFetch} from '../shared/hooks/useFetch';

export const FetchStarWars = () => {
  const [value, setValue] = useState(1);
  const [personNumber, setPersonNumber] = useState(value);
  const handleClick = () => setPersonNumber(value);
  const {error, loading, data} = useFetch(
    `https://swapi.dev/api/people/${personNumber >= 1 ? personNumber : 1}`
  );
  return (
    <>
      <h2>Find Star Wars personage</h2>
      <label>Set a number: </label>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick}>Ok</button>
      {error ? (
        <div>{error}</div>
      ) : loading ? (
        <span> Loading...</span>
      ) : (
        <span>{` ${data.name}`}</span>
      )}
    </>
  );
};
