import { useEffect, useState } from "react";

const useLocalStorage = (key: string, initialvalue: string[]) => {
  const [value, setValue] = useState(() => {
    const items = localStorage.getItem(key);
    return items ? JSON.parse(items) : initialvalue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
