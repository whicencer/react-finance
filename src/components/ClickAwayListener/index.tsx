import React, { useEffect } from 'react';

interface Props {
  children: React.ReactNode;
  onClickHandler: () => void;
  buttonRef: React.RefObject<HTMLButtonElement>;
  currentStatus: boolean;
}

const ClickAwayListener: React.FC<Props> = ({ children, onClickHandler, buttonRef, currentStatus }) => {
  useEffect(() => {
    const awayClickHandler = (e: any) => {
      if (e.composedPath()[0] !== buttonRef.current && currentStatus) {
        onClickHandler();
      }
    };
    document.addEventListener('click', awayClickHandler);

    return () => document.removeEventListener('click', awayClickHandler);
  }, [currentStatus]);
  return (
    <>
      { children }
    </>
  );
};

export default ClickAwayListener;