import React, { useState, useEffect } from 'react';
import { useTypedSelector } from '@hooks/useTypedSelector';
import Button from '@shared/ui/Button';
import { CustomSelect } from '@shared/ui/CustomSelect';
import Input from '@shared/ui/Input';
import { numberFieldFormat } from '@utils/numberFieldFormat';
import { validateFields } from './addTransactionsPopup.utils';
import { categoriesIncomeSelect, categoriesSelect, statusSelect } from './addTransaction.constants';
import { useAddTransaction } from './addTransactionPopup.hooks';
import { AddTransactionInput } from './AddTransactionInput';
import { Category, IPayload } from './AddTransactionsPopup.typings';

export const AddTransactionForm: React.FC<{ setActive: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setActive }) => {
  const createTransaction = useAddTransaction();
  const { items: cards } = useTypedSelector(state => state.creditCards.cards);

  if (!cards.length) {
    return <h3>To add a transaction, you first need to create a card</h3>;
  }

  const currency = useTypedSelector(state => state.currencies.currentCurrency.symbol);
  const allCards = cards.map(card => {
    return {value: card.card_id, label: `${card.cardName} (${currency} ${card.balance})`};
  });
  const [formData, setFormData] = useState<IPayload>({
    status: 'expense',
    balanceId: allCards[0].value,
    sum: 0,
    category: 'entertainments',
    note: ''
  });
  const { status, balanceId, category, note, sum } = formData;
  useEffect(() => status === 'expense' ? setCategory('entertainments') : setCategory('income'), [status]);

  const addTransactionHandler = () => {
    createTransaction({
      balanceId,
      category,
      note,
      status,
      sum
    });
    setActive(false);
  };

  const categoryLabel = status === 'expense'
    ? categoriesIncomeSelect.find(el => el.label === category)?.value
    : categoriesSelect.find(el => el.label === category)?.value;

  const handleSumChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormData({...formData, sum: Number(numberFieldFormat(e.currentTarget.value))});
  };
  const setCategory = (category: Category) => setFormData({...formData, category});
  const setNote = (e: React.FormEvent<HTMLInputElement>) => setFormData({...formData, note: e.currentTarget.value});

  return (
    <div>
      <AddTransactionInput label='Income / Expense'>
        <CustomSelect value={status} setAction={(value) => setFormData({...formData, status: value})} options={statusSelect} />
      </AddTransactionInput>

      <AddTransactionInput label='Sum'>
        <Input pattern='[0-9]+([\.][0-9]+)?' value={String(sum)} onChange={handleSumChange} placeholder='Sum' type={'text'} />
      </AddTransactionInput>

      <AddTransactionInput label='Note'>
        <Input pattern='.{0,80}' value={note} onChange={setNote} placeholder='Note' />
      </AddTransactionInput>

      <AddTransactionInput label='Balance'>
        <CustomSelect value={balanceId} setAction={(value) => setFormData({...formData, balanceId: value})} options={allCards} />
      </AddTransactionInput>

      <AddTransactionInput label='Category'>
        <CustomSelect value={categoryLabel} setAction={setCategory} options={status === 'expense' ? categoriesSelect : categoriesIncomeSelect} />
      </AddTransactionInput>

      <Button onClick={() => validateFields(addTransactionHandler, sum, note, balanceId, category, status)}>Add transaction</Button>
    </div>
  );
};