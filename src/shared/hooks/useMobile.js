import {useState, useEffect} from 'react';

export const useMobile = () => {
  const [mobile, setMobile] = useState(false);

  let checkScreenSize = () => {
    setMobile(window.innerWidth < 1024);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return mobile;
};
