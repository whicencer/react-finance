/* eslint-disable camelcase */
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
        cards?.map(({ balance, cardName, themeId, card_id }) => {
          return (
            <CreditCard
              themeId={themeId}
              id={card_id}
              cardName={cardName}
              balance={balance}
              key={card_id}
            />
          );
        })
      }
    </>
  );
};

export default CreditCardsList;