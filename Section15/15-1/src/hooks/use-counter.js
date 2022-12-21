import { useState, useEffect } from "react";

const useCounter = (operator) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let interval;
    if (operator === "+") {
      interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
    }
    if (operator === "-") {
      interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [operator]);

  return counter;
};

export default useCounter;
