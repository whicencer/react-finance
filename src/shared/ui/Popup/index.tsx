import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { IPopupProps } from './popup.types';
import { PopupContainer, PopupInner } from './popup.styles';

import styles from './Popup.module.scss';

const Popup: React.FC<IPopupProps> = ({ isActive, setActive, children }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const closePopup = (e: any) => {
    e.stopPropagation();
    setActive(false);
  };

  if (!isActive) {
    return null;
  }

  return (
    <PopupContainer onClick={closePopup}>
      <PopupInner onClick={(e) => e.stopPropagation()}>
        <AiOutlineClose onClick={closePopup} className={styles.closeButton} />
        { children }
      </PopupInner>
    </PopupContainer>
  );
};

export default Popup;