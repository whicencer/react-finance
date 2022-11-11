import React from 'react';
import { CryptoCard } from '../../components/CryptoCard';
import { useGetCryptoCoinsQuery } from '../../services/cryptoApi';
import Flex from '../../shared/ui/Flex';
import { CryptoCardSkeleton } from '../../shared/ui/Skeletons/CryptoCardSkeleton';

export const CryptoChange24 = () => {
  const { data, error, isLoading } = useGetCryptoCoinsQuery('');

  console.log(data, error);

  return (
    <Flex direction='column' style={{ marginTop: 20 }}>
      <h4 style={{ marginBottom: 13 }}>Change (24h)</h4>
      <Flex justifyContent='space-between' style={{ width: '100%', overflow: 'auto' }}>
        {
          isLoading
            ? <>
                <CryptoCardSkeleton />
                <CryptoCardSkeleton />
                <CryptoCardSkeleton />
                <CryptoCardSkeleton />
              </>
            : <>
                <CryptoCard coinName={{short: 'btc', full: 'bitcoin'}} />
                <CryptoCard coinName={{short: 'bnb', full: 'bnb'}} />
                <CryptoCard coinName={{short: 'eth', full: 'ethereum'}} />
                <CryptoCard coinName={{short: 'sol', full: 'solana'}} />
              </>
        }
      </Flex>
    </Flex>
  );
};