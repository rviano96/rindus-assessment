import React, { useEffect } from "react";

//This can be done inside a helper.
const useDebounce = <T>(value: T, delay: number): T | undefined => {
  const [debouncedValue, setDebouncedValue] = React.useState<T | undefined>(
    value
  );

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
