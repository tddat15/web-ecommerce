import { useEffect } from 'react';

interface Props {
  callback: (size: { width: number; height: number }) => {
    width: number;
    height: number;
  };
}

export const useWindowResize = ({ callback }: Props) => {
  useEffect(() => {
    function handleResize() {
      try{
        callback({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      } catch (e) {
        console.warn(`Callback failed: ${e}`)
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
};