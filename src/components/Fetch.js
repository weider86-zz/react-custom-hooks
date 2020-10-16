import React from 'react';
import {useFetch} from '../shared/hooks/useFetch';

export const Fetch = () => {
  const {error, loading, data} = useFetch('https://swapi.dev/api/people/1/');
  if (error) return <div>{error} </div>;
  if (loading) return <div>loading...</div>;
  return (
    <>
      <ul>
        <li>{data.name}</li>
      </ul>
    </>
  );
};
