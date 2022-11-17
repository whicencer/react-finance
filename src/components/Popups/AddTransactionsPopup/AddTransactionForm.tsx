import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useTypedSelector } from '../../../app/hooks/useTypedSelector';
import Button from '../../../shared/ui/Button';
import { CustomSelect } from '../../../shared/ui/CustomSelect';
import Input from '../../../shared/ui/Input';
import { addTransaction } from '../../../store/slices/creditCards';
import { generateObjectId } from '../../../utils/generateObjectId';
import { getRandomEmoji } from '../../../utils/getRandomEmoji';
import { numberFieldFormat } from '../../../utils/numberFieldFormat';
import { addTransactionDB } from './addTransactionPopup.service';
import { validateFields } from './addTransactionsPopup.utils';
import { categoriesIncomeSelect, categoriesSelect, statusSelect } from './selectOptions';

export const AddTransactionForm: React.FC<{ setActive: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setActive }) => {
  const dispatch = useDispatch();

  const { items: cards } = useTypedSelector(state => state.creditCards.cards);
  const currency = useTypedSelector(state => state.currencies.currentCurrency.symbol);

  const balances = cards.map(card => {
    return {value: card.id, label: `${card.cardName} (${currency} ${card.balance})`};
  });

  const addTransactionHandler = () => {
    const data = {
      status,
      balance,
      sum: +sum || 0,
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

  const [status, setStatus] = useState<'income' | 'expense'>('expense');
  const [balance, setBalance] = useState(balances[0].value);
  const [sum, setSum] = useState('');
  const [category, setCategory] = useState('entertainments');
  const [note, setNote] = useState('');

  const categoryLabel = status === 'expense'
    ? categoriesIncomeSelect.find(el => el.label === category)?.value
    : categoriesSelect.find(el => el.label === category)?.value;


  useEffect(() => {
    status === 'expense' ? setCategory('entertainments') : setCategory('income');
  }, [status]);

  const handleSumChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSum(numberFieldFormat(e.currentTarget.value));
  };

  return (
    <div>
      <label>Income / Expense</label>
      <CustomSelect theme='light' value={status} setAction={setStatus} options={statusSelect} />
      <br />

      <label>Sum</label>
      <Input pattern='[0-9]+([\.][0-9]+)?' value={sum} onChange={handleSumChange} placeholder='Sum' type={'text'} />
      <br />

      <label>Note</label>
      <Input pattern='.{0,80}' value={note} onChange={(e: React.FormEvent<HTMLInputElement>) => setNote(e.currentTarget.value)} placeholder='Note' />
      <br />

      <label>Balance</label>
      <CustomSelect theme='light' value={balance} setAction={setBalance} options={balances} />
      <br />

      <label>Category</label>
      <CustomSelect theme='light' value={categoryLabel} setAction={setCategory} options={status === 'expense' ? categoriesSelect : categoriesIncomeSelect} />
      <br />

      <Button onClick={() => validateFields(addTransactionHandler, sum, note, balance, category, status)}>Add transaction</Button>
    </div>
  );
};
