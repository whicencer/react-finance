import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useTypedSelector } from '../../../app/hooks/useTypedSelector';
import Button from '../../../shared/ui/Button';
import { CustomSelect } from '../../../shared/ui/CustomSelect';
import Input from '../../../shared/ui/Input';
import { generateObjectId } from '../../../utils/generateObjectId';
import { getRandomEmoji } from '../../../utils/getRandomEmoji';
import { numberFieldFormat } from '../../../utils/numberFieldFormat';
import { validateFields } from './addTransactionsPopup.utils';
import { categoriesIncomeSelect, categoriesSelect, statusSelect } from './addTransaction.constants';
import { useAddTransaction } from './addTransactionPopup.hooks';
import { AddTransactionInput } from './AddTransactionInput';

export const AddTransactionForm: React.FC<{ setActive: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setActive }) => {
  const createTransaction = useAddTransaction();
  const { items: cards } = useTypedSelector(state => state.creditCards.cards);

  if (!cards.length) {
    return <h3>To add a transaction, you first need to create a card</h3>;
  }

  const currency = useTypedSelector(state => state.currencies.currentCurrency.symbol);
  const allCards = cards.map(card => {
    return {value: card.id, label: `${card.cardName} (${currency} ${card.balance})`};
  });
  const [formData, setFormData] = useState<{ status: 'income' | 'expense', balance: string, sum: string, category: string, note: string }>({
    status: 'expense',
    balance: allCards[0].value,
    sum: '',
    category: 'entertainments',
    note: ''
  });
  const { status, balance, category, note, sum } = formData;
  useEffect(() => status === 'expense' ? setCategory('entertainments') : setCategory('income'), [status]);

  const addTransactionHandler = () => {
    const transaction = {
      status,
      balance,
      sum: +sum || 0,
      category,
      note,
      date: new Date(),
      id: `transaction_${generateObjectId()}`
    };
    const currentBalance = cards[cards.findIndex(card => card.id === transaction.balance)].balance;
    const resolve = () => {
      toast.success(`${getRandomEmoji()} Transaction was successfully added`);
      setActive(false);
    };
    const reject = (error: Error) => toast.error(error.message);

    createTransaction(transaction, currentBalance, resolve, reject);
  };

  const categoryLabel = status === 'expense'
    ? categoriesIncomeSelect.find(el => el.label === category)?.value
    : categoriesSelect.find(el => el.label === category)?.value;

  const handleSumChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormData({...formData, sum: numberFieldFormat(e.currentTarget.value)});
  };
  const setCategory = (category: string) => setFormData({...formData, category});
  const setNote = (e: React.FormEvent<HTMLInputElement>) => setFormData({...formData, note: e.currentTarget.value});

  return (
    <div>
      <AddTransactionInput label='Income / Expense'>
        <CustomSelect value={status} setAction={(value) => setFormData({...formData, status: value})} options={statusSelect} />
      </AddTransactionInput>

      <AddTransactionInput label='Sum'>
        <Input pattern='[0-9]+([\.][0-9]+)?' value={sum} onChange={handleSumChange} placeholder='Sum' type={'text'} />
      </AddTransactionInput>

      <AddTransactionInput label='Note'>
        <Input pattern='.{0,80}' value={note} onChange={setNote} placeholder='Note' />
      </AddTransactionInput>

      <AddTransactionInput label='Balance'>
        <CustomSelect value={balance} setAction={(value) => setFormData({...formData, balance: value})} options={allCards} />
      </AddTransactionInput>

      <AddTransactionInput label='Category'>
        <CustomSelect value={categoryLabel} setAction={setCategory} options={status === 'expense' ? categoriesSelect : categoriesIncomeSelect} />
      </AddTransactionInput>

      <Button onClick={() => validateFields(addTransactionHandler, sum, note, balance, category, status)}>Add transaction</Button>
    </div>
  );
};