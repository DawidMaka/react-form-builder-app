import { useState, useEffect } from 'react';

export const useStateWithLocalStorage = localStorageKey => {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem(localStorageKey) || '[]'));

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
