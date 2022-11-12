import React, { useState, useEffect } from 'react';
import { useDocumentTitle } from '../../app/hooks/useDocumentTitle';
import Flex from '../../shared/ui/Flex';
import Header from '../../components/Header';
import { AddTransactionPopup } from '../../components/Popups/AddTransactionsPopup';
import { TransactionItem } from '../../components/TransactionItem';
import { PageContent } from '../../shared/components/PageContent';
import { OpenPopupButton } from '../../shared/ui/PageButton';
import { getNormalDate } from '../../utils/getNormalDate';
import { TransactionsList } from './transactions.styles';
import { useDispatch } from 'react-redux';
import { setTransactions } from '../../store/slices/creditCards';
import { getTransactionsFromDB } from '../../services/transactionsService';
import { useTypedSelector } from '../../app/hooks/useTypedSelector';

const Transactions = () => {
  useDocumentTitle('React Finance - Transactions');
  const [isPopupActive, setIsPopupActive] = useState(false);
  const { transactions } = useTypedSelector(state => state.creditCards);
  const dispatch = useDispatch();

  useEffect(() => {
    getTransactionsFromDB().then(data => dispatch(setTransactions(data)));
  }, []);

  const listOfAllDates = transactions.map(transaction => transaction.date).sort((a,b) => {
    const aToTimestamp = Math.floor(a.getTime()/1000);
    const bToTimestamp = Math.floor(b.getTime()/1000);

    return bToTimestamp - aToTimestamp;
  }).map(date => getNormalDate(date));

  const filteredDatesList = listOfAllDates.filter((date, pos) => listOfAllDates.indexOf(date) === pos);

  return (
    <div>
      <Header />
      <PageContent>
        <Flex justifyContent='space-between'>
          <h2>Transactions</h2>
          <OpenPopupButton onClick={() => setIsPopupActive(true)}>Add transaction</OpenPopupButton>
        </Flex>
        <TransactionsList>
          { !transactions.length && `You haven't made any transactions yet` }
          {
            filteredDatesList.map((date, key) => {
              return (
                <div key={key}>
                  <h4>{date}</h4>
                  {
                    transactions.filter(transaction => getNormalDate(transaction.date) === date).map(transaction => {
                      return (
                        <TransactionItem key={transaction.id} transaction={transaction} />
                      );
                    })
                  }
                </div>
              );
            })
          }
        </TransactionsList>
      </PageContent>
      <AddTransactionPopup isActive={isPopupActive} setActive={setIsPopupActive} />
    </div>
  );
};

export default React.memo(Transactions);