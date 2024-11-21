import { useEffect, useState } from "react";

const useLocalStorage = (initialState, key) => {
  const [value, setValue] = useState(() => {
    const storedItem = localStorage.getItem("watched");
    return storedItem ? JSON.parse(storedItem) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
