import React, { useState } from 'react';
import { IPopupStates } from '../../../app/typings/IPopupStates';
import Popup from '../../../shared/ui/Popup';
import { CustomSelect } from '../../../shared/ui/CustomSelect';
import Input from '../../../shared/ui/Input';
import Button from '../../../shared/ui/Button';
import { useTypedSelector } from '../../../app/hooks/useTypedSelector';
import { categoriesIncomeSelect, categoriesSelect, statusSelect } from './selectOptions';
import { useDispatch } from 'react-redux';
import { addTransactionDB } from './addTransaction.service';
import { addTransaction } from '../../../store/slices/creditCards';
import { getCurrentDate } from '../../../utils/getCurrentDate';
import { generateObjectId } from '../../../utils/generateObjectId';
import { validateFields } from './addTransactions.utils';

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
      note,
      date: getCurrentDate(),
      id: `transaction_${generateObjectId()}`
    };
    const currentBalance = cards[cards.findIndex(card => card.id === data.balance)].balance;
    
    try {
      addTransactionDB(data, currentBalance);
      dispatch(addTransaction(data));
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
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
        {
          status === 'expense'
            ? <CustomSelect setAction={setCategory} options={categoriesSelect} />
            : <CustomSelect setAction={setCategory} options={categoriesIncomeSelect} />
        }
        <br />

        <Button onClick={() => validateFields(addTransactionHandler, sum, note, balance, category, status)}>Add transaction</Button>
      </div>
    </Popup>
  );
};