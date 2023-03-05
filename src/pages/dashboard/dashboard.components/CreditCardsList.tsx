import React from 'react';
import { useTypedSelector } from '../../../app/hooks/useTypedSelector';
import CreditCard from '../../../components/CreditCard';
import { CreditCardSkeletons } from './CreditCardSkeletons';

const CreditCardsList = () => {
  const { items: cards, isLoading } = useTypedSelector(state => state.creditCards.cards);
  
  if (isLoading) {
    return <CreditCardSkeletons />;
  }
  if (!cards.length) {
    return <p>You have not made any cards yet</p>;
  }

  return (
    <>
      {
        cards?.map(({ cardName, balance, themeId, id }) => {
          return (
            <CreditCard
              themeId={themeId}
              id={id}
              cardName={cardName}
              balance={balance}
              key={id}
            />
          );
        })
      }
    </>
  );
};

export default CreditCardsList;