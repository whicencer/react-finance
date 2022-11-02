import React from 'react';

import { AiOutlineClose } from 'react-icons/ai';

import { IPopupProps } from './popup.types';
import { PopupContainer, PopupInner } from './popup.styles';

const Popup: React.FC<IPopupProps> = ({ isActive, setActive, children }) => {
  const closePopup = () => setActive(false);
  const closePopupOnEsc = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closePopup();
    }
  };

  if (!isActive) {
    return null;
  }

  return (
    <PopupContainer onClick={closePopup}>
      <PopupInner onKeyDown={closePopupOnEsc} onClick={(e) => e.stopPropagation()}>
        { children }
        <AiOutlineClose
          style={{
            cursor: 'pointer',
            position: 'absolute',
            right: 10,
            top: 10,
            color: '#fff',
          }}
          onClick={closePopup}
        />
      </PopupInner>
    </PopupContainer>
  );
};

export default Popup;