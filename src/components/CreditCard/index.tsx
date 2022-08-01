import React from 'react';
import styled from 'styled-components';
import Flex from '../Flex';

const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(21deg, #dd03e4, #5611ec);
  border-radius: 20px;
  padding: 10px 25px;
  margin: 0 10px;
  max-width: 225px;
  height: 150px;
  min-width: 250px;
`;

const CreditCard = () => {
  return (
    <Card>
      <Flex direction={'column'} justifyContent={'space-around'}>
        <h2>$1,234,320</h2>
        <h4>Card Name: General</h4>
      </Flex>
      <Flex direction={'column'} alignItems={'center'} style={{ position: 'absolute', top: '0', right: '0' }}>
        <img style={{ width: '50px' }} src="https://cutewallpaper.org/24/visa-logo-png/23-visa-logo-transparent-logo-icon-source.png"
           alt="visa" />
        <img style={{ width: '70px' }} src="https://usa.visa.com/dam/VCOM/regional/na/us/pay-with-visa/images/card-chip-800x450.png"
           alt="card-chip" />
      </Flex>
    </Card>
  );
};

export default CreditCard;