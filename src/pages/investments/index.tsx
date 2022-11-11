import React from 'react';
import { toast } from 'react-toastify';
import { useDocumentTitle } from '../../app/hooks/useDocumentTitle';
import { CryptoCard } from '../../components/CryptoCard';
import Header from '../../components/Header';
import { PageContent } from '../../shared/components/PageContent';
import Flex from '../../shared/ui/Flex';
import { PageButton } from '../../shared/ui/PageButton';

export const Investments = () => {
  useDocumentTitle('React Finance - Investments');

  return (
    <div>
      <Header />
      <PageContent>
        {/*page content header*/}
        <Flex justifyContent='space-between'>
          <h2>Investments</h2>
          <PageButton onClick={() => toast.info('This button not functioning yet')}>Create portfolio</PageButton>
        </Flex>

        {/* cryptos */}
        <Flex direction='column' style={{ marginTop: 20 }}>
          <h4 style={{ marginBottom: 13 }}>Change (24h)</h4>
          <Flex style={{ width: '100%', overflow: 'auto' }}>
            <CryptoCard coinName={{short: 'btc', full: 'bitcoin'}} />
            <CryptoCard coinName={{short: 'bnb', full: 'bnb'}} />
            <CryptoCard coinName={{short: 'eth', full: 'ethereum'}} />
            <CryptoCard coinName={{short: 'sol', full: 'solana'}} />
          </Flex>
        </Flex>
      </PageContent>
    </div>
  );
};