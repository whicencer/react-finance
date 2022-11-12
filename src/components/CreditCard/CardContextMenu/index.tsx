import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../../store/slices/creditCards';
import ContextMenu from '../../../shared/ui/Dropdown/ContextMenu';
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../../../app/config/firebase';
import { useAuth } from '../../../app/hooks/useAuth';
import { ICardContextMenuProps } from './cardContextMenu.types';
import { getTransactionsFromDB } from '../../../services/transactionsService';
import { toast } from 'react-toastify';
import { getRandomEmoji } from '../../../utils/getRandomEmoji';
import { useNavigate } from "react-router-dom";
import { CardThemePopup } from '../../Popups/CardThemePopup';
import { ChangeCardNamePopup } from '../../Popups/ChangeCardNamePopup';
import { ConfirmationPopup } from '../../../shared/ui/ConfirmationPopup';

export const CardContextMenu: React.FC<ICardContextMenuProps> = ({id, x, y, isOpen, setIsOpen}) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [isCardThemeActive, setCardThemeActive] = useState(false);
  const [isCardNameActive, setCardNameActive] = useState(false);
  const [isConfirmActive, setConfirmActive] = useState(false);

  const deleteCardCallback = async (e: any) => {
    e.stopPropagation();
    dispatch(deleteCard(id));
    
    await deleteDoc(doc(db, `user_${user.uid}`, `cards_${id}`));
    getTransactionsFromDB().then(data => {
      const transactionsWithDeletingBalance = data.filter(transaction => transaction.balance === id);
      transactionsWithDeletingBalance.map(transaction => {
        deleteDoc(doc(db, `user_${user.uid}`, `transactions_${transaction.id}`));
      });
    });
    toast.success(`${getRandomEmoji()} Card was successfully deleted`);
  };

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
          { text: 'Change theme', onClick: () => setCardThemeActive(true)},
          { text: 'Add transaction', onClick: () => navigate('/transactions')},
          { text: 'Change name', onClick: () => setCardNameActive(true)},
         ]
      }
      />
      <CardThemePopup popupState={{ isActive: isCardThemeActive, setActive: setCardThemeActive }} id={id} />
      <ChangeCardNamePopup popupState={{ isActive: isCardNameActive, setActive: setCardNameActive }} id={id} />
      <ConfirmationPopup isActive={isConfirmActive} setIsActive={setConfirmActive} confirmCallback={deleteCardCallback} confirmText='Are you sure you want to delete the card?' />
    </>
  );
};