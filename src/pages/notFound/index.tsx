import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';

const NotFoundComponent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;
const NotFoundText = styled.h1`
  font-size: 160px;
`;

const NotFound = () => {
  return (
    <>
      <Header />
      <NotFoundComponent>
        <NotFoundText>404</NotFoundText>
        <h2>PAGE NOT FOUND</h2>
      </NotFoundComponent>
    </>
  );
};

export default NotFound;
