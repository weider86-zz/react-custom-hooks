import React from 'react';
import {useMobile} from '../shared/hooks/useMobile';
import mobile from '../assets/images/mobile.svg';
import desktop from '../assets/images/desktop.svg';

export const Mobile = () => {
  const onMobile = useMobile();

  return (
    <>
      <h2>Device: </h2>
      {onMobile ? (
        <div>
          <img src={mobile} width='100px' />
        </div>
      ) : (
        <div>
          <img src={desktop} width='100px' />
        </div>
      )}
    </>
  );
};
