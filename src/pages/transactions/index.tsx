import React from 'react';
import Flex from '../../components/Flex';
import Header from '../../components/Header';

const Transactions = () => {
  return (
    <div>
      <Header />
      <Flex direction='column' style={{ padding: '20px' }}>
        <h2>Transactions</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis error, nam itaque delectus vitae exercitationem excepturi ut officiis eius eos.</p>
      </Flex>
    </div>
  );
};

export default React.memo(Transactions);