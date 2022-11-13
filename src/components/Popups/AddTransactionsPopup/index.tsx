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
import { addTransaction } from '../../../store/slices/transactions';
import { generateObjectId } from '../../../utils/generateObjectId';
import { validateFields } from './addTransactionsPopup.utils';
import { toast } from 'react-toastify';
import { getRandomEmoji } from '../../../utils/getRandomEmoji';

export const AddTransactionPopup: React.FC<IPopupStates> = ({ isActive, setActive }) => {
  const dispatch = useDispatch();

  const { items: cards } = useTypedSelector(state => state.creditCards);
  const currency = useTypedSelector(state => state.currencies.currentCurrency.symbol);
  
  const balances = cards.map(card => {
    return {value: card.id, label: `${card.cardName} (${currency} ${card.balance})`};
  });

  const [status, setStatus] = useState<'income' | 'expense'>('expense');
  const [balance, setBalance] = useState(balances[0].value);
  const [sum, setSum] = useState(0);
  const [category, setCategory] = useState('entertainments');
  const [note, setNote] = useState('');

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
        <CustomSelect value={status} setAction={setStatus} options={statusSelect} />
        <br />
        
        <label>Sum</label>
        <Input value={sum} onChange={(e: React.FormEvent<HTMLInputElement>) => setSum(+e.currentTarget.value)} placeholder='Sum' type={'number'} />
        <br />

        <label>Note</label>
        <Input value={note} onChange={(e: React.FormEvent<HTMLInputElement>) => setNote(e.currentTarget.value)} placeholder='Note' />
        <br />

        <label>Balance</label>
        <CustomSelect value={balance} setAction={setBalance} options={balances} />
        <br />
        
        <label>Category</label>
        <CustomSelect value={category} setAction={setCategory} options={status === 'expense' ? categoriesSelect : categoriesIncomeSelect} />
        <br />

        <Button onClick={() => validateFields(addTransactionHandler, sum, note, balance, category, status)}>Add transaction</Button>
      </div>
    </Popup>
  );
};