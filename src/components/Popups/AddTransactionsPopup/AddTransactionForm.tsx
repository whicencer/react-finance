import React, { useReducer } from 'react';
import { useTypedSelector } from '@hooks/useTypedSelector';
import Button from '@shared/ui/Button';
import { CustomSelect } from '@shared/ui/CustomSelect';
import Input from '@shared/ui/Input';
import { numberFieldFormat } from '@utils/numberFieldFormat';
import { validateFields } from './addTransactionsPopup.utils';
import { categoriesIncomeSelect, categoriesSelect, statusSelect } from './addTransaction.constants';
import { useAddTransaction } from './addTransactionPopup.hooks';
import { AddTransactionInput } from './AddTransactionInput';
import { Category } from './AddTransactionsPopup.typings';
import { ActionsTypes, formDataReducer } from '@components/Popups/AddTransactionsPopup/reducer/formDataReducer';

export const AddTransactionForm: React.FC<{ setActive: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setActive }) => {
  const createTransaction = useAddTransaction();
  const { items: cards } = useTypedSelector(state => state.creditCards.cards);
  const currency = useTypedSelector(state => state.currencies.currentCurrency.symbol);

  const allCardsFormatted = cards.map(card => {
    return {value: card.card_id, label: `${card.cardName} (${currency} ${card.balance})`};
  });

  const [formData, dispatchFormData] = useReducer(formDataReducer, {
    status: 'expense',
    balanceId: allCardsFormatted[0].value,
    sum: 0,
    category: Category.ENTERTAINMENTS,
    note: ''
  });

  const categoryLabel = formData.status === 'expense'
    ? categoriesIncomeSelect.find(el => el.label === formData.category)?.value
    : categoriesSelect.find(el => el.label === formData.category)?.value;

  const addTransactionHandler = () => {
    createTransaction(formData);
    setActive(false);
  };

  const setSum = (e: React.FormEvent<HTMLInputElement>) => {
    dispatchFormData({
      type: ActionsTypes.CHANGE_TRANSACTION_SUM,
      payload: Number(numberFieldFormat(e.currentTarget.value))
    });
  };
  const setCategory = (category: Category) => dispatchFormData({type: ActionsTypes.CHANGE_TRANSACTION_CATEGORY, payload: category});
  const setNote = (e: React.FormEvent<HTMLInputElement>) => dispatchFormData({type: ActionsTypes.CHANGE_TRANSACTION_NOTE, payload: e.currentTarget.value});
  const setStatus = (value: 'income' | 'expense') => {
    value === 'expense' ? setCategory(Category.ENTERTAINMENTS) : setCategory(Category.INCOME);
    dispatchFormData({type: ActionsTypes.CHANGE_TRANSACTION_STATUS, payload: value});
  }

  if (!cards.length) {
    return <h3>To add a transaction, you first need to create a card</h3>;
  }
  return (
    <div>
      <AddTransactionInput label='Income / Expense'>
        <CustomSelect value={formData.status} setAction={setStatus} options={statusSelect} />
      </AddTransactionInput>

      <AddTransactionInput label='Sum'>
        <Input pattern='[0-9]+([\.][0-9]+)?' value={String(formData.sum)} onChange={setSum} placeholder='Sum' type={'text'} />
      </AddTransactionInput>

      <AddTransactionInput label='Note'>
        <Input pattern='.{0,80}' value={formData.note} onChange={setNote} placeholder='Note' />
      </AddTransactionInput>

      <AddTransactionInput label='Balance'>
        <CustomSelect value={formData.balanceId} setAction={(value) => dispatchFormData({type: ActionsTypes.CHANGE_TRANSACTION_BALANCE_ID, payload: value})} options={allCardsFormatted} />
      </AddTransactionInput>

      <AddTransactionInput label='Category'>
        <CustomSelect value={categoryLabel} setAction={setCategory} options={formData.status === 'expense' ? categoriesSelect : categoriesIncomeSelect} />
      </AddTransactionInput>

      <Button onClick={() => validateFields(addTransactionHandler, formData.sum, formData.note, formData.balanceId, formData.category, formData.status)}>Add transaction</Button>
    </div>
  );
};