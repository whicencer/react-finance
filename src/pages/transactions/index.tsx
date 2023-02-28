import React, { useState } from 'react';
import { useDocumentTitle } from '../../app/hooks/useDocumentTitle';
import Flex from '../../shared/ui/Flex';
import Header from '../../components/Header';
import { AddTransactionPopup } from '../../components/Popups/AddTransactionsPopup';
import { TransactionItem } from '../../components/TransactionItem';
import { PageContent } from '../../shared/components/PageContent';
import { PageButton } from '../../shared/ui/PageButton';
import { getNormalDate } from '../../utils/getNormalDate';
import { TransactionsList } from './transactions.styles';
import { useTypedSelector } from '../../app/hooks/useTypedSelector';
import { CategoriesExpenses } from './CategoriesExpenses/CategoriesExpenses';
import { FilterByCardName } from './FilterByCardName/FilterByCardName';
import { DatePicker } from '../../shared/ui/DatePicker';
import { monthsText } from './transactions.constants';

const Transactions = () => {
  // Hooks
  useDocumentTitle('React Finance - Transactions');
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [currentFilterCard, setCurrentFilterCard] = useState('');
  const { items: transactions } = useTypedSelector(state => state.creditCards.transactions);
  const [{ month, year }, setCurrentDate] = useState({ year: new Date().getFullYear(), month: new Date().getMonth() });

  const filteredTransactions = transactions.filter(transaction => !currentFilterCard.length ? transaction : transaction.balance === currentFilterCard);

  const listOfAllDates = filteredTransactions.map(transaction => transaction.date).sort((a,b) => {
    const aToTimestamp = Math.floor(a.getTime()/1000);
    const bToTimestamp = Math.floor(b.getTime()/1000);

    return bToTimestamp - aToTimestamp;
  }).map(date => getNormalDate(date));

  const filteredDatesList = listOfAllDates.filter((date, pos) => listOfAllDates.indexOf(date) === pos);
  
  const transactionsByDate = transactions.filter(transaction => {
    return transaction.date.getFullYear() === year && transaction.date.getMonth() === month;
  });

  return (
    <div>
      <Header />
      <PageContent>
        <Flex justifyContent='space-between'>
          <h2>Transactions</h2>
          <PageButton onClick={() => setIsPopupActive(true)}>Add transaction</PageButton>
        </Flex>
        
        <Flex direction='column'>
          <DatePicker onChange={(month, year) => setCurrentDate({month, year})} />
        </Flex>
        <CategoriesExpenses currentDate={{ month, year }} />
        <TransactionsList>
          <FilterByCardName setCurrentCard={setCurrentFilterCard} />
          { !transactions.length && `You haven't made any transactions yet` }
          {
            transactionsByDate.length ? filteredDatesList.map((date, key) => {
              return (
                <div key={key}>
                  <h4>{date}</h4>
                  {
                    transactionsByDate.filter(transaction => getNormalDate(transaction.date) === date).map(transaction => {
                      return (
                        <TransactionItem key={transaction.id} transaction={transaction} />
                      );
                    })
                  }
                </div>
              );
            }) : `You have any transactions at ${monthsText[month]} ${year}`
          }
        </TransactionsList>
      </PageContent>
      <AddTransactionPopup isActive={isPopupActive} setActive={setIsPopupActive} />
    </div>
  );
};

export default React.memo(Transactions);