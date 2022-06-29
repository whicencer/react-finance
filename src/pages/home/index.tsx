import React from 'react';
import Flex from '../../components/Flex';
import Button from '../../components/ui/Button';
import { HomeTitle, StyledImg } from './home.styles';

const Home = () => {
  return (
    <>
      <Flex justifyContent="center" padding="10px 0">
        <h2 style={{ fontFamily: 'Archivo', fontWeight: '400' }}>
          REACT FINANCE
        </h2>
      </Flex>
      <Flex justifyContent="space-around" alignItems="center">
        <Flex
          style={{ height: '90vh' }}
          direction="column"
          justifyContent="center"
          padding="0 30px"
        >
          <HomeTitle>
            Manage your finance with <br /> React Finance
          </HomeTitle>
          <Button style={{ marginTop: '20px' }}>Get Started</Button>
        </Flex>
        <StyledImg src={require('../../assets/home.gif')} alt="shape" />
      </Flex>
    </>
  );
};

export default Home;
