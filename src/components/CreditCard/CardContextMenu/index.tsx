import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../../store/slices/creditCards';
import ContextMenu from '../../../shared/ui/Dropdown/ContextMenu';
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../../../app/config/firebase';
import { useAuth } from '../../../app/hooks/useAuth';
import { ICardContextMenuProps } from './cardContextMenu.types';
import { getTransactionsFromDB } from '../../../app/services/getTransactionsFromDB';
import { toast } from 'react-toastify';
import { getRandomEmoji } from '../../../utils/getRandomEmoji';
import { useNavigate } from "react-router-dom";
import { CardThemePopup } from '../../Popups/CardThemePopup';
import { ChangeCardNamePopup } from '../../Popups/ChangeCardNamePopup';

export const CardContextMenu: React.FC<ICardContextMenuProps> = ({id, x, y}) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [isCardThemeActive, setCardThemeActive] = useState(false);
  const [isCardNameActive, setCardNameActive] = useState(false);

  return (
    <>
      <ContextMenu
      x={x}
      y={y}
      dropdownList={
        [
          { text: 'Delete card', onClick: async (e) => {
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
            } },
            { text: 'Change theme', onClick: (e) => {
              e.stopPropagation();
              setCardThemeActive(true);
            } },
            { text: 'Add transaction', onClick: (e) => {
              e.stopPropagation();
              navigate('/transactions');
            } },
            { text: 'Change name', onClick: (e) => {
              e.stopPropagation();
              setCardNameActive(true);
            } },
          ]
        }
      />
      <CardThemePopup popupState={{ isActive: isCardThemeActive, setActive: setCardThemeActive }} id={id} />
      <ChangeCardNamePopup popupState={{ isActive: isCardNameActive, setActive: setCardNameActive }} id={id} />
    </>
  );
};