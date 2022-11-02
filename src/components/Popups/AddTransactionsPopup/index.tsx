import React, { useState } from 'react';
import { IPopupStates } from '../../../app/typings/IPopupStates';
import Popup from '../../../shared/ui/Popup';
import { CustomSelect } from '../../../shared/ui/CustomSelect';
import Input from '../../../shared/ui/Input';
import Button from '../../../shared/ui/Button';
import { useTypedSelector } from '../../../app/hooks/useTypedSelector';
import { categoriesIncomeSelect, categoriesSelect, statusSelect } from './selectOptions';
import { useDispatch } from 'react-redux';
import { addTransactionDB } from './addTransactionPopup.service';
import { addTransaction } from '../../../store/slices/creditCards';
import { generateObjectId } from '../../../utils/generateObjectId';
import { validateFields } from './addTransactionsPopup.utils';
import { toast } from 'react-toastify';
import { getRandomEmoji } from '../../../utils/getRandomEmoji';

export const AddTransactionPopup: React.FC<IPopupStates> = ({ isActive, setActive }) => {
  const dispatch = useDispatch();

  const [status, setStatus] = useState<'income' | 'expense'>('expense');
  const [balance, setBalance] = useState('');
  const [sum, setSum] = useState(0);
  const [category, setCategory] = useState('');
  const [note, setNote] = useState('');

  const cards = useTypedSelector(state => state.creditCards.cards);
  const currency = useTypedSelector(state => state.currencies.currentCurrency.symbol);

  const balances = cards.map(card => {
    return {value: card.id, label: `${card.cardName} (${currency} ${card.balance})`};
  });

  const addTransactionHandler = () => {
    const data = {
      status,
      balance,
      sum,
      category,
      note,
      date: new Date(),
      id: `transaction_${generateObjectId()}`
    };
    const currentBalance = cards[cards.findIndex(card => card.id === data.balance)].balance;
    
    try {
      addTransactionDB(data, currentBalance);
      dispatch(addTransaction(data));
      toast.success(`${getRandomEmoji()} Transaction was successfully added`);
      setActive(false);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
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
        <CustomSelect setAction={setCategory} options={status === 'expense' ? categoriesSelect : categoriesIncomeSelect} />
        <br />

        <Button onClick={() => validateFields(addTransactionHandler, sum, note, balance, category, status)}>Add transaction</Button>
      </div>
    </Popup>
  );
};