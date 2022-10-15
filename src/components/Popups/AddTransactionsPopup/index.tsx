import React, { useState } from 'react';
import { IPopupStates } from '../../../app/typings/IPopupStates';
import Popup from '../../../shared/ui/Popup';
import { CustomSelect } from '../../../shared/ui/CustomSelect';
import Input from '../../../shared/ui/Input';
import Button from '../../../shared/ui/Button';
import { useTypedSelector } from '../../../app/hooks/useTypedSelector';
import { categoriesSelect, statusSelect } from './selectOptions';

export const AddTransactionPopup: React.FC<IPopupStates> = ({ isActive, setActive }) => {
  const [status, setStatus] = useState<'income' | 'expense'>('expense');
  const [balance, setBalance] = useState(null);
  const [sum, setSum] = useState(0);
  const [category, setCategory] = useState(null);

  const cards = useTypedSelector(state => state.creditCards.cards);

  const balances = cards.map(card => {
    return {value: card.id, label: card.cardName};
  });

  return (
    <Popup isActive={isActive} setActive={setActive}>
      <div>
        <label>Income / Expense</label>
        <CustomSelect setAction={setStatus} options={statusSelect} />
        <br />
        
        <label>Sum</label>
        <Input onChange={(e: React.FormEvent<HTMLInputElement>) => setSum(+e.currentTarget.value)} placeholder='Sum' type={'number'} />
        <br />

        <label>Balance</label>
        <CustomSelect setAction={setBalance} options={balances} />
        <br />
        
        <label>Category</label>
        <CustomSelect disabled={status === 'income'} setAction={setCategory} options={categoriesSelect} />
        <br />

        <Button onClick={() => console.log({status, balance, category, sum})}>Add transaction</Button>
      </div>
    </Popup>
  );
};