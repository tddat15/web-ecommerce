import { useEffect, useRef } from 'react';

interface Props {
  callback: () => void; // callback to be called every interval
  delay?: number; // delay in ms
  stopOperator?: boolean; // when true, stop the interval
  dependencies?: any[]; // dependencies to re-run the interval
}

function useInterval({
  callback,
  delay = 1000,
  stopOperator = false,
  dependencies = [],
  }: Props)
{
  const savedCallback = useRef<() => void>(() => {});
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Save the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    if (delay !== null && delay > 0 && !stopOperator) {
      intervalRef.current = setInterval(() => {
        if (savedCallback.current) {
          savedCallback.current();
        }
      }, delay);

      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }

    // Clear if stopOperator becomes true
    if (stopOperator && intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, [...dependencies, delay, stopOperator]);

  return intervalRef.current;
}

export default useInterval;
