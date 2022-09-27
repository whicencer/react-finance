import { useEffect } from "react";

export const useAwayClick = (clickHandler: () => void) => {
  useEffect(() => {
    window.addEventListener('click', clickHandler);
    return () => window.removeEventListener('click', clickHandler);
  }, []);
};