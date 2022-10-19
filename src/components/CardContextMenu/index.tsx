import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../store/slices/creditCards';
import ContextMenu from '../../shared/ui/Dropdown/ContextMenu';
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../../app/config/firebase';
import { useAuth } from '../../app/hooks/useAuth';
import { ICardContextMenuProps } from './cardContextMenu.types';

export const CardContextMenu: React.FC<ICardContextMenuProps> = ({id, openPopup, x, y}) => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <ContextMenu
      x={x}
      y={y}
      dropdownList={
        [
          { text: 'Delete card', onClick: async (e) => {
            e.stopPropagation();
            dispatch(deleteCard(id));

            await deleteDoc(doc(db, `user_${user.uid}`, `cards_${id}`));
          } },
          { text: 'Change theme', onClick: (e) => {
            e.stopPropagation();
            openPopup();
          } }
        ]
      }
      isActive={true}
    />
  );
};