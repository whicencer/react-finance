import React from 'react';
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useTypedSelector } from '@hooks/useTypedSelector';
import { setCurrency } from "@store/slices/currencies";
import { getRandomEmoji } from "@utils/getRandomEmoji";
import styles from './ChangeCurrency.module.scss';
import { currencies } from './ChangeCurrency.constants';

export const ChangeCurrency = () => {
  const dispatch = useDispatch();
  const currentCurrency = useTypedSelector(state => state.currencies.currentCurrency.code);

  const changeCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    try {
      dispatch(setCurrency(e.target.value));
      toast.success(`${getRandomEmoji()} Currency successfully changed`);
    } catch (error) {
      let message = 'Unknown Error';
      if (error instanceof Error) message = error.message;
      toast.error(message);
    }
  };

  return (
    <select className={styles.select} value={currentCurrency} onChange={changeCurrency}>
      {
        currencies.map(currency => {
          return <option key={currency.value} value={currency.value}>{ currency.displayText }</option>
        })
      }
    </select>
  );
};