/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useGetCryptoByNameQuery } from '../../../../services/cryptoApi';
import Flex from '../../../../shared/ui/Flex';
import Input from '../../../../shared/ui/Input';
import { CryptoDetails } from '../CryptoDetails';

import styles from './styles.module.scss';

export const CryptoSearch = () => {
  const [currentQuery, setCurrentQuery] = useState('bitcoin');
  const { data, error, isError } = useGetCryptoByNameQuery(currentQuery);
  
  if (!data?.data) {
    return (
      <p>bruh</p>
    );
  }

  if (isError) {
    toast.error((error as any).data.error);
  }

  const coin = data.data;

  return (
    <Flex className={styles.searchBlock} direction='column' justifyContent='center'>
      <h2>Search</h2>
      <Input onKeyDown={(event) => setCurrentQuery(event.target.value)} placeholder='Search' style={{ marginTop: 15, width: '98%' }} />
      <CryptoDetails coin={coin} />
    </Flex>
  );
};