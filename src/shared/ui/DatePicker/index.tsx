import React, { useState, useEffect } from 'react';
import { useAwayClick } from '../../../app/hooks/useAwayClick';
import Flex from '../Flex';
import styles from './DatePicker.module.scss';

interface IDatePickerProps {
  // eslint-disable-next-line no-unused-vars
  onChange: (month: number, year: number) => void;
}

export const DatePicker: React.FC<IDatePickerProps> = ({ onChange }) => {
  const [chooseDateActive, setChooseDateActive] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear] = useState(new Date().getFullYear());

  useAwayClick(() => setChooseDateActive(false));
  const monthsText = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(',');

  useEffect(() => {
    onChange(currentMonth, currentYear);
  }, [currentMonth, currentYear]);

  return (
    <Flex onClick={(e) => e.stopPropagation()} className={styles.datePickerWrapper}>
      <Flex justifyContent='space-between' alignItems='center' onClick={() => setChooseDateActive(!chooseDateActive)} className={styles.datePickerButton}>
        <p>Choose date</p>
        <p style={{ marginLeft: 5 }}>&#128197;</p>
      </Flex>
      <Flex direction='column' alignItems='center' className={chooseDateActive ? styles.datePicker+" "+styles.active : styles.datePicker}>
        <Flex style={{ width: '90%' }} justifyContent='space-between' alignItems='center'>
          <button>{'<'}</button>
          <span>{currentYear}</span>
          <button>{'>'}</button>
        </Flex>
        <Flex style={{ width: '90%', marginTop: '15px' }} wrap={'wrap'} justifyContent='space-between'>
          {
            monthsText.map(month => {
              const monthToNumber = new Date(`2022-${month}-1`).getMonth();
              return <Flex onClick={() => setCurrentMonth(monthToNumber)} justifyContent='center' alignItems='center' className={monthToNumber === currentMonth ? styles.datePickerMonth+" "+styles.active : styles.datePickerMonth} key={month}>{month}</Flex>;
            })
          }
        </Flex>
      </Flex>
    </Flex>
  );
};
