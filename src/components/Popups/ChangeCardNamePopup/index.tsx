import React, { useState } from 'react';
import { IPopupStates } from '@typings/IPopupStates';
import Button from '@shared/ui/Button';
import Input from '@shared/ui/Input';
import Popup from '@shared/ui/Popup';
import Flex from '@shared/ui/Flex';
import { useChangeCardName } from './changeCardNamePopup.hooks';

export const ChangeCardNamePopup: React.FC<{popupState: IPopupStates, id: string}> = ({ popupState, id }) => {
  const changeCardName = useChangeCardName(id);
  const [newNameValue, setNewNameValue] = useState('');

  const changeNameHandler = () => {
    changeCardName(newNameValue);
    popupState.setActive(false);
  };

  return (
    <Popup isActive={popupState.isActive} setActive={popupState.setActive}>
      <Flex direction='column' alignItems='center'>
        <h2>Change card name</h2>
        <Input value={newNameValue} placeholder='New card name' onChange={e => setNewNameValue(e.target.value)} style={{ marginTop: 20 }} />
        <Button style={{ marginTop: 20 }} onClick={changeNameHandler}>Update card name</Button>
      </Flex>
    </Popup>
  );
};