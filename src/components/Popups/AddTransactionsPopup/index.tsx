import React from 'react';
import { IPopupStates } from '@typings/IPopupStates';
import Popup from '@shared/ui/Popup';
import { AddTransactionForm } from './AddTransactionForm';

export const AddTransactionPopup: React.FC<IPopupStates> = ({ isActive, setActive }) => {
  return (
    <Popup isActive={isActive} setActive={setActive}>
      <AddTransactionForm setActive={setActive} />
    </Popup>
  );
};