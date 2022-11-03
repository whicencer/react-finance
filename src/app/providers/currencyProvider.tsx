import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrency } from '../../store/slices/currencies';
import { getLocalStorage } from '../../utils/localStorage';

// eslint-disable-next-line react/display-name
const CurrencyProvider = (Component: FC) => () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const currency = JSON.parse(getLocalStorage('currency') || JSON.stringify('usd'));
    dispatch(setCurrency(currency));
  }, []);

  return <Component />;
};

export default CurrencyProvider;
