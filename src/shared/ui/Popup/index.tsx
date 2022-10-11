import React from 'react';

import { AiOutlineClose } from 'react-icons/ai';

import { IPopupProps } from './popup.types';
import { PopupContainer, PopupInner } from './popup.styles';

const Popup: React.FC<IPopupProps> = ({ isActive, setActive, children }) => {
  const closePopup = () => setActive(false);

  return (
    <PopupContainer onClick={closePopup} isActive={isActive}>
      <PopupInner onClick={(e) => e.stopPropagation()}>
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