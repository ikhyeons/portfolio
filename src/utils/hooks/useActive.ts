import { useState, useEffect } from "react";

export default function useDelay(times: number[]) {
  const [active, setActive] = useState<boolean[]>(
    new Array(times.length).fill(false)
  );
  useEffect(() => {
    times.map((time, i) => {
      setTimeout(() => {
        setActive((prev) => {
          let newArr = [...prev];
          newArr[i] = true;
          return newArr;
        });
      }, time);
    });
  }, []);

  return active;
}
