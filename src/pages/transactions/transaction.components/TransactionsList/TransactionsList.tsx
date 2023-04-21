import React, { useState } from 'react';
import { useTypedSelector } from '../../../../app/hooks/useTypedSelector';
import { TransactionItem } from '../../../../components/TransactionItem';
import { getNormalDate } from '../../../../utils/getNormalDate';
import { monthsText } from '../../transactions.constants';
import { FilterByCardName } from '../FilterByCardName/FilterByCardName';

interface Props {
  year: number;
  month: number;
}

const TransactionsList: React.FC<Props> = ({ year, month }) => {
  const [currentFilterCard, setCurrentFilterCard] = useState('');
  
  const { items } = useTypedSelector(state => state.creditCards.transactions);
  const transactions = items.map(transaction => ({...transaction, CreatedAt: new Date(transaction.CreatedAt)}));
  
  // Filter by card name
  const filteredTransactions = transactions.filter(transaction => !currentFilterCard.length ? true : transaction.balanceId === currentFilterCard);
  
  // Sort by date
  const listOfAllDates = filteredTransactions
  .filter(transaction => transaction.CreatedAt.getMonth() === month)
  .map(transaction => transaction.CreatedAt).sort((a,b) => {
    const aToTimestamp = Math.floor(a.getTime()/1000);
    const bToTimestamp = Math.floor(b.getTime()/1000);

      return bToTimestamp - aToTimestamp;
    })
    .map(date => getNormalDate(date));

    
  const filteredDatesList = listOfAllDates.filter((date, pos) => listOfAllDates.indexOf(date) === pos);
  
  const transactionsByDate = transactions.filter(transaction => {
    return transaction.CreatedAt.getFullYear() === year && transaction.CreatedAt.getMonth() === month;
  });

  if (!transactionsByDate.length && !transactions.length) {
    return (
      // eslint-disable-next-line react/no-unescaped-entities
      <p>You haven't made any transactions yet</p>
    );
  }

  return (
    <>
      <FilterByCardName setCurrentCard={setCurrentFilterCard} />
      {
        transactionsByDate.length ? filteredDatesList.map((date, key) => {
          return (
            <div key={key}>
              <h4>{date}</h4>
              {
                filteredTransactions.filter(transaction => getNormalDate(transaction.CreatedAt) === date).map(transaction => {
                  return (
                    <TransactionItem key={transaction.id} transaction={transaction} />
                  );
                })
              }
            </div>
          );
        }) : `You have any transactions at ${monthsText[month]} ${year}`
      }
    </>
  );
};

export default React.memo(TransactionsList);