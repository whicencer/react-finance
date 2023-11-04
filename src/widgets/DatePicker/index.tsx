import React, { useState, useCallback, useMemo } from 'react';
import { useAwayClick } from 'app/hooks/useAwayClick';
import Flex from 'shared/ui/Flex';
import styles from './DatePicker.module.scss';

interface IDatePickerProps {
  // eslint-disable-next-line no-unused-vars
  onChange: (month: number, year: number) => void;
}

const DatePicker: React.FC<IDatePickerProps> = ({ onChange }) => {
  const [chooseDateActive, setChooseDateActive] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useAwayClick(useCallback(() => setChooseDateActive(false), []));
  const monthsText = useMemo(() => 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(','), []);

  const handleMonthClick = (monthIndex: number) => {
      setCurrentMonth(monthIndex);
      onChange(monthIndex, currentYear);
  };

  const handleYearIncrement = () => {
    setCurrentYear((prevYear) => prevYear + 1);
    onChange(currentMonth, currentYear+1);
  };

  const handleYearDecrement = () => {
    setCurrentYear((prevYear) => prevYear - 1 >= 2020 ? prevYear - 1 : prevYear);
    onChange(currentMonth, currentYear-1);
  };

  return (
    <Flex onClick={(e) => e.stopPropagation()} className={styles.datePickerWrapper}>
      <Flex justifyContent='space-between' alignItems='center' onClick={() => setChooseDateActive(!chooseDateActive)} className={styles.datePickerButton}>
        <p>Choose date</p>
        <p style={{ marginLeft: 5 }}>&#128197;</p>
      </Flex>
      <Flex direction='column' alignItems='center' className={chooseDateActive ? styles.datePicker+" "+styles.active : styles.datePicker}>
        <Flex style={{ width: '90%' }} justifyContent='space-between' alignItems='center'>
          <button disabled={currentYear === 2020} onClick={handleYearDecrement}>{currentYear-1}</button>
          <h3>{currentYear}</h3>
          <button onClick={handleYearIncrement}>{currentYear+1}</button>
        </Flex>
        <Flex style={{ width: '90%', marginTop: '15px' }} wrap={'wrap'} justifyContent='space-between'>
          {
            monthsText.map((_, monthIndex) => {
              return <Flex onClick={() => handleMonthClick(monthIndex)} justifyContent='center' alignItems='center'
                className={
                  monthIndex === currentMonth
                  ? styles.datePickerMonth+" "+styles.active
                  : styles.datePickerMonth} key={monthIndex}
              >{monthsText[monthIndex]}</Flex>;
            })
          }
        </Flex>
      </Flex>
    </Flex>
  );
};

export default React.memo(DatePicker);