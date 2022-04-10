// Code (from online, used in previous project) to have state take from local storage
import { useEffect, useState } from "react";

export default function useLocalState(key, initial) {
  const [value, setValue] = useState(() => {
    if (typeof window !== undefined && window.localStorage) {
      const saved = window.localStorage.getItem(key);
      if (saved) {
        return JSON.parse(saved);
      }
    }
    return initial;
  });

  useEffect(() => {
    if (window.localStorage) {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue]; 
}