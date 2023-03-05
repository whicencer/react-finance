import React, { useState } from 'react';
import { useDocumentTitle } from '../../app/hooks/useDocumentTitle';
import TransactionsList from './transaction.components/TransactionsList/TransactionsList';
import DatePicker from '../../widgets/DatePicker';
import Flex from '../../shared/ui/Flex';
import { AddTransactionPopup } from '../../components/Popups/AddTransactionsPopup';
import { PageButton } from '../../shared/ui/PageButton';
import { CategoriesExpenses } from './transaction.components/CategoriesExpenses/CategoriesExpenses';

const Transactions = () => {
  // Hooks
  useDocumentTitle('React Finance - Transactions');
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [{ month, year }, setCurrentDate] = useState({ year: new Date().getFullYear(), month: new Date().getMonth() });
  
  console.log('render transactions');

  return (
    <div>
      <Flex justifyContent='space-between'>
        <h2>Transactions</h2>
        <PageButton onClick={() => setIsPopupActive(true)}>Add transaction</PageButton>
      </Flex>
      
      <Flex direction='column'>
        <DatePicker onChange={(month, year) => setCurrentDate({month, year})} />
      </Flex>
      <CategoriesExpenses currentDate={{ month, year }} />
      <TransactionsList month={month} year={year} />
      <AddTransactionPopup isActive={isPopupActive} setActive={setIsPopupActive} />
    </div>
  );
};

export default React.memo(Transactions);