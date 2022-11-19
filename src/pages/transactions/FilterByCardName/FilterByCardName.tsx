import React from 'react';
import { useTypedSelector } from '../../../app/hooks/useTypedSelector';
import { CustomSelect } from '../../../shared/ui/CustomSelect';
import Flex from '../../../shared/ui/Flex';
import styles from './FilterByCardName.module.scss';

export const FilterByCardName: React.FC<{setCurrentCard: React.Dispatch<string>}> = ({ setCurrentCard }) => {
  const { items: cards } = useTypedSelector(state => state.creditCards.cards);

  const options = [
    { value: '', label: 'All cards' },
    ...cards.map(card => ({ value: card.id, label: card.cardName }))
  ];

  return (
    <Flex justifyContent='space-between' alignItems='center' margin='10px 0'>
      <p className={styles.filterText}>Filter by card</p>
      <CustomSelect styles={{ minWidth: 150 }} theme='dark' setAction={setCurrentCard} options={options} />
    </Flex>
  );
};
