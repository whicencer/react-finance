import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import ContextMenu from '../../../shared/ui/Dropdown/ContextMenu';
import { ICardContextMenuProps } from './cardContextMenu.types';
// import { CardThemePopup } from '../../Popups/CardThemePopup';
// import { ChangeCardNamePopup } from '../../Popups/ChangeCardNamePopup';
import { ConfirmationPopup } from '../../../shared/ui/ConfirmationPopup';
import { useDeleteCard } from './cardContextMenu.hooks';

export const CardContextMenu: React.FC<ICardContextMenuProps> = ({id, x, y, isOpen, setIsOpen}) => {
  const deleteCardCallback = useDeleteCard(id);
  const navigate = useNavigate();

  // const [isCardThemeActive, setCardThemeActive] = useState(false);
  // const [isCardNameActive, setCardNameActive] = useState(false);
  const [isConfirmActive, setConfirmActive] = useState(false);

  return (
    <>
      <ContextMenu
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      x={x}
      y={y}
      dropdownList={
        [
          { text: 'Delete card', onClick: () => setConfirmActive(true)},
          // { text: 'Change theme', onClick: () => setCardThemeActive(true)},
          { text: 'Add transaction', onClick: () => navigate('/transactions')},
          // { text: 'Change name', onClick: () => setCardNameActive(true)},
         ]
      }
      />
      {/* <CardThemePopup popupState={{ isActive: isCardThemeActive, setActive: setCardThemeActive }} id={id} /> */}
      {/* <ChangeCardNamePopup popupState={{ isActive: isCardNameActive, setActive: setCardNameActive }} id={id} /> */}
      <ConfirmationPopup isActive={isConfirmActive} setIsActive={setConfirmActive} confirmCallback={deleteCardCallback} confirmText='Are you sure you want to delete the card?' />
    </>
  );
};