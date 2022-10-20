/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { useAddCard } from './addCardPopup.hooks';
import { AddCardPopupTitle } from "../../../pages/dashboard/dashboard.styles";
import Flex from "../../Flex";
import Button from "../../../shared/ui/Button";
import Input from "../../../shared/ui/Input";
import Popup from "../../../shared/ui/Popup";
import { IPopupStates } from '../../../app/typings/IPopupStates';
import { generateObjectId } from '../../../utils/generateObjectId';

const AddCardPopup: React.FC<IPopupStates> = ({ isActive, setActive }) => {
  const id = `card_${generateObjectId()}`;

  const [cardName, setCardName] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [balance, setBalance] = useState(0);
  
  const addNewCard = useAddCard();

  const data = { balance, cardName, id, themeId: 2 };

  const addCard = () => {
    cardName.length !== 0 && cardName.length <= 20 && balance <= 999999999 && balance >= 0 ? addNewCard(data).then(() => setActive(false)) : alert('Error');
  };

  const handleChange = (event: any) => {
    if (event.target.value.length >= 20) {
      setErrorMessage('This field length should be less than 20 characters');
      setErrorVisible(true);
    } else {
      setErrorVisible(false);
    }
    setCardName(event.target.value);
  };
  const handleBlur = (event: any) => {
    if (event.target.value <= 0) {
      setErrorMessage('Field cannot be empty!');
      setErrorVisible(true);
    }
  };

  return (
    <Popup isActive={isActive} setActive={setActive}>
      <Flex direction='column' alignItems='center'>
        <AddCardPopupTitle>Add credit card</AddCardPopupTitle>
        <label style={{ color: 'red', display: errorVisible ? 'block' : 'none' }}>{errorMessage}</label>
        <Input
          placeholder='Card Name'
          value={cardName}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ margin: '10px', width: '80%' }}
        />
        <Input
          type={'number'}
          placeholder='Balance'
          value={balance}
          onChange={(e) => setBalance(Number(e.target.value))}
          style={{ margin: '10px 0 20px 0', width: '80%' }}
        />
        <Button style={{ width: '60%' }} onClick={addCard}>Add card</Button>
      </Flex>
    </Popup>
  );
};

export default AddCardPopup;