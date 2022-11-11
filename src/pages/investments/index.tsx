import React from 'react';
import { toast } from 'react-toastify';
import { useDocumentTitle } from '../../app/hooks/useDocumentTitle';
import Header from '../../components/Header';
import { PageContent } from '../../shared/components/PageContent';
import Flex from '../../shared/ui/Flex';
import { PageButton } from '../../shared/ui/PageButton';
import { CryptoChange24 } from './CryptoChange24';

export const Investments = () => {
  useDocumentTitle('React Finance - Investments');
  
  return (
    <div>
      <Header />
      <PageContent>
        {/*page content header*/}
        <Flex justifyContent='space-between'>
          <h2>Investments</h2>
          <PageButton onClick={() => toast.info(`😒 I'm still in development`)}>Create portfolio</PageButton>
        </Flex>
        <CryptoChange24 />
      </PageContent>
    </div>
  );
};