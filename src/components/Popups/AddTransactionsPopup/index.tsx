import React, { useState } from 'react';
import { IPopupStates } from '../../../app/typings/IPopupStates';
import Popup from '../../../shared/ui/Popup';
import { CustomSelect } from '../../../shared/ui/CustomSelect';
import Input from '../../../shared/ui/Input';
import Button from '../../../shared/ui/Button';
import { useTypedSelector } from '../../../app/hooks/useTypedSelector';
import { categoriesSelect, statusSelect } from './selectOptions';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../../../store/slices/transactions';

export const AddTransactionPopup: React.FC<IPopupStates> = ({ isActive, setActive }) => {
  const dispatch = useDispatch();

  const [status, setStatus] = useState<'income' | 'expense'>('expense');
  const [balance, setBalance] = useState('');
  const [sum, setSum] = useState(0);
  const [category, setCategory] = useState('');
  const [note, setNote] = useState('');

  const cards = useTypedSelector(state => state.creditCards.cards);

  const balances = cards.map(card => {
    return {value: card.id, label: card.cardName};
  });

  const addTransactionHandler = () => {
    const data = {
      status,
      balance,
      sum,
      category,
      note
    };

    dispatch(addTransaction(data));
  };

  return (
    <Popup isActive={isActive} setActive={setActive}>
      <div>
        <label>Income / Expense</label>
        <CustomSelect setAction={setStatus} options={statusSelect} />
        <br />
        
        <label>Sum</label>
        <Input onChange={(e: React.FormEvent<HTMLInputElement>) => setSum(+e.currentTarget.value)} placeholder='Sum' type={'number'} />
        <br />

        <label>Note</label>
        <Input onChange={(e: React.FormEvent<HTMLInputElement>) => setNote(e.currentTarget.value)} placeholder='Note' />
        <br />

        <label>Balance</label>
        <CustomSelect setAction={setBalance} options={balances} />
        <br />
        
        <label>Category</label>
        <CustomSelect disabled={status === 'income'} setAction={setCategory} options={categoriesSelect} />
        <br />

        <Button onClick={addTransactionHandler}>Add transaction</Button>
      </div>
    </Popup>
  );
};