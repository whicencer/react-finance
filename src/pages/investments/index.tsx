import React from 'react';
import { toast } from 'react-toastify';
import { useDocumentTitle } from '../../app/hooks/useDocumentTitle';
import Flex from '../../shared/ui/Flex';
import { PageButton } from '../../shared/ui/PageButton';
import { CryptoChange24 } from './components/CryptoChange24';
import { CryptoSearch } from './components/CryptoSearch';

const Investments = () => {
  useDocumentTitle('React Finance - Investments');
  
  return (
    <div>
      <Flex justifyContent='space-between'>
        <h2>Investments</h2>
        <PageButton onClick={() => toast.info(`😒 I'm still in development`)}>Create portfolio</PageButton>
      </Flex>
      <CryptoChange24 />
      <CryptoSearch />
    </div>
  );
};

export default Investments;