import React from 'react';
import styled from 'styled-components';
import Header from '../Header';

const PageContentStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 960px;
  margin: 0 auto;
`;

export const PageContent: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  return (
    <>
      <Header />
      <PageContentStyles>
        { children }
      </PageContentStyles>
    </>
  );
};