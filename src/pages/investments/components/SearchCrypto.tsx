import React, { useState } from 'react';
import { useGetCryptoByNameQuery } from '../../../services/cryptoApi';
import Flex from '../../../shared/ui/Flex';
import Input from '../../../shared/ui/Input';

export const SearchCrypto = () => {
  const [currentQuery, setCurrentQuery] = useState('bitcoin');
  const { data } = useGetCryptoByNameQuery(currentQuery.toLowerCase());

  return (
    <Flex direction='column' alignItems='center' style={{ width: '100%', marginTop: 40 }}>
      <Input onKeyDown={(event) => setCurrentQuery(event.target.value)} placeholder='Search' style={{ width: '98%', fontSize: '18px' }} />
      <Flex alignItems='center' justifyContent='space-between' style={{ width: '100%', margin: '15px 7px', padding: '10px', backgroundColor: '#0F0F13', borderRadius: '10px' }}>
        <Flex alignItems='center'>
          <img width='34px' src={`https://cryptologos.cc/logos/${data?.data?.name.toLowerCase()}-${data?.data?.symbol.toLowerCase()}-logo.png`} alt="coin_logo" />
          <h4 style={{ marginLeft: '10px' }}>{data?.data.name}</h4>
        </Flex>
        <h4>{Number(data?.data.priceUsd).toFixed(2)}</h4>
      </Flex>
    </Flex>
  );
};