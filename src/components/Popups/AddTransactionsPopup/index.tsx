import React, { useState } from 'react';
import { IPopupStates } from '../../../app/typings/IPopupStates';
import Popup from '../../../shared/ui/Popup';
import { CustomSelect } from '../../../shared/ui/CustomSelect';
import Input from '../../../shared/ui/Input';
import Button from '../../../shared/ui/Button';
import { useTypedSelector } from '../../../app/hooks/useTypedSelector';

const options = [
  { value: 'expense', label: 'Expense' },
  { value: 'income', label: 'Income' }
];
const options3 = [
  { value: 'entertainments', label: 'Entertainments' },
  { value: 'beauty', label: 'Beauty' },
  { value: 'health', label: 'Health' },
  { value: 'food', label: 'Food' },
  { value: 'tech', label: 'Tech' },
  { value: 'education', label: 'Education' },
  { value: 'investments', label: 'Investments' },
  { value: 'traveling', label: 'Traveling' },
];

export const AddTransactionPopup: React.FC<IPopupStates> = ({ isActive, setActive }) => {
  const [status, setStatus] = useState<'income' | 'expense'>('income');
  const [balance, setBalance] = useState(null);
  const [sum, setSum] = useState(0);
  const [category, setCategory] = useState('Entertainments');

  const cards = useTypedSelector(state => state.creditCards.cards);

  const options2 = cards.map(card => {
    return {value: card.id, label: card.cardName};
  });

  return (
    <Popup isActive={isActive} setActive={setActive}>
      <div>
        <label>Income / Expense</label>
        <CustomSelect setAction={setStatus} options={options} />
        <br />
        
        <label>Sum</label>
        <Input onChange={(e: React.FormEvent<HTMLInputElement>) => setSum(+e.currentTarget.value)} placeholder='Sum' type={'number'} />
        <br />

        <label>Balance</label>
        <CustomSelect setAction={setBalance} options={options2} />
        <br />
        
        <label>Category</label>
        <CustomSelect disabled={status === 'income'} setAction={setCategory} options={options3} />
        <br />

        <Button onClick={() => console.log({status, balance, category, sum})}>Add transaction</Button>
      </div>
    </Popup>
  );
};