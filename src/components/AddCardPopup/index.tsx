import React, { useState } from 'react';
import { useAddCard } from './addCardPopup.hooks';
import { AddCardPopupTitle } from "../../pages/dashboard/dashboard.styles";
import Flex from "../Flex";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Popup from "../ui/Popup";
import { IAddCardPopup } from './addCardPopup.types';
import { generateObjectId } from '../../utils/generateObjectId';

const AddCardPopup: React.FC<IAddCardPopup> = ({ isActive, setActive }) => {
  const id = generateObjectId();

  const [cardName, setCardName] = useState('');
  const [balance, setBalance] = useState('');
  const addNewCard = useAddCard();
  
  const data = { balance: Number(balance), cardName, id };

  return (
    <Popup isActive={isActive} setActive={setActive}>
      <Flex direction='column' alignItems='center'>
        <AddCardPopupTitle>Add credit card</AddCardPopupTitle>
        <Input
          placeholder='Card Name'
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          style={{ margin: '10px', width: '80%' }}
        />
        <Input
          type={'number'}
          placeholder='Balance'
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
          style={{ margin: '10px 0 20px 0', width: '80%' }}
        />
        <Button style={{ width: '60%' }} onClick={() => addNewCard(data)}>Add card</Button>
      </Flex>
    </Popup>
  );
};

export default AddCardPopup;