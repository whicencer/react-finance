/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { useAddCard } from './addCardPopup.hooks';
import { AddCardPopupTitle } from "../../../pages/dashboard/dashboard.styles";
import Flex from "../../../shared/ui/Flex";
import Button from "../../../shared/ui/Button";
import Input from "../../../shared/ui/Input";
import Popup from "../../../shared/ui/Popup";
import { IPopupStates } from '../../../app/typings/IPopupStates';
import { generateObjectId } from '../../../utils/generateObjectId';
import { validateFields } from './addCardPopup.utils';

import { toast } from 'react-toastify';
import { getRandomEmoji } from '../../../utils/getRandomEmoji';
import { numberFieldFormat } from '../../../utils/numberFieldFormat';

const AddCardPopup: React.FC<IPopupStates> = ({ isActive, setActive }) => {
  const id = `card_${generateObjectId()}`;

  const [cardName, setCardName] = useState('');
  const [balance, setBalance] = useState('');
  
  const addNewCard = useAddCard();
  const numberedBalance = Number(balance);
  
  const data = { balance: numberedBalance, cardName, id, themeId: 2 };

  const addCard = () => {
    addNewCard(data).then(() => {
      setActive(false);
      toast.success(`${getRandomEmoji()} Card was successfully added`);
    }).catch(err => {
      toast.error(err.message);
    });
  };
  const handleBalanceChange = (e: React.FormEvent<HTMLInputElement>) => {
    setBalance(numberFieldFormat(e.currentTarget.value));
  };

  return (
    <Popup isActive={isActive} setActive={setActive}>
      <Flex direction='column' alignItems='center'>
        <AddCardPopupTitle>Add credit card</AddCardPopupTitle>
        <Input
          placeholder='Card Name'
          value={cardName}
          onChange={(e: React.FormEvent<HTMLInputElement>) => setCardName(e.currentTarget.value)}
          style={{ margin: '10px', width: '80%' }}
        />
        <Input
          pattern='[0-9]+([\.][0-9]+)?'
          placeholder='Balance'
          onChange={handleBalanceChange}
          value={balance}
          style={{ margin: '10px 0 20px 0', width: '80%' }}
        />
        <Button style={{ width: '60%' }} onClick={() => validateFields(addCard, cardName, numberedBalance)}>Add card</Button>
      </Flex>
    </Popup>
  );
};

export default AddCardPopup;