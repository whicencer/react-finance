import React from 'react';
import { IPopupStates } from '../../../app/typings/IPopupStates';
import Popup from '../../../shared/ui/Popup';

export const AddTransactionPopup: React.FC<IPopupStates> = ({ isActive, setActive }) => {
  return (
    <Popup isActive={isActive} setActive={setActive}>
      <div>Add transaction popup</div>
    </Popup>
  );
};