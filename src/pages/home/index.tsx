import React from 'react';
import styled, { keyframes } from 'styled-components';
import Flex from '../../components/Flex';
import Header from '../../components/Header';
import Button from '../../components/ui/Button';

const titleAnimate = keyframes`
  from {
    transform: translateY(-40px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;
const HomeTitle = styled.h1`
  font-size: 55px;
  animation: ${titleAnimate} 1s linear;

  @media screen and (max-width: 730px) {
    font-size: 50px;
  }
  @media screen and (max-width: 410px) {
    font-size: 40px;
  }
`;
const StyledImg = styled.img`
  @media screen and (max-width: 945px) {
    display: none;
  }
`;

const Home = () => {
  return (
    <>
      <Header />
      <Flex justifyContent="space-around" alignItems="center">
        <Flex
          style={{ height: '70vh' }}
          direction="column"
          justifyContent="center"
          padding="0 30px"
        >
          <HomeTitle>
            Manage your finance with <br /> React Finance
          </HomeTitle>
          <Button style={{ marginTop: '20px' }}>Get Started</Button>
        </Flex>
        <StyledImg src={require('../../assets/home.gif')} alt='shape' />
      </Flex>
    </>
  );
};

export default Home;
