import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const usePersistentState = <T extends unknown>(
  key: string,
  initialState: T
): [T, Dispatch<SetStateAction<T>>] => {
  const [state, setState] = useState<T>(() => {
    // In Next.js we must be sure that code are running in client-side to use localStorage.
    // (typeof window !== 'undefined') works because it does not access window object, just checks its type.
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem(key);
      if (storedValue) return JSON.parse(storedValue);
    }
    return initialState;
  });

  // If key or state changes, update localStorage value.
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default usePersistentState;
