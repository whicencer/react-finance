import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../store/slices/creditCards';
import Dropdown from '../ui/Dropdown';
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../../app/config/firebase';
import { useAuth } from '../../app/hooks/useAuth';

export const CardContextMenu = (props: {id: string, openPopup: any}) => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Dropdown
      dropdownList={
        [
          { text: 'Delete card', onClick: async (e) => {
            e.stopPropagation();
            dispatch(deleteCard(props.id));

            await deleteDoc(doc(db, `user_${user.uid}`, `card_${props.id}`));
          } },
          { text: 'Change theme', onClick: (e) => {
            e.stopPropagation();
            props.openPopup();
          } }
        ]
      }
      isActive={true}
    />
  );
};